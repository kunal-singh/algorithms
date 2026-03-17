#!/usr/bin/env bash
set -euo pipefail

BRANCH="practice/$(date +%Y-%m-%d)"
DATE="$(date +%Y-%m-%d)"

# 1. Assert on main with clean working tree
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
  echo "Error: must be on main (currently on $current_branch)" >&2
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Error: working tree is not clean" >&2
  exit 1
fi

# 2. Assert branch doesn't already exist
if git rev-parse --verify "$BRANCH" &>/dev/null; then
  echo "Branch already exists for today" >&2
  exit 1
fi

# 3. Create branch
git checkout -b "$BRANCH"

# 4. Discover solution files:
#    - All .js files under subdirectories (not root-level)
#    - Excluding *.test.js
#    - Excluding node_modules
solution_files=()
while IFS= read -r f; do
  solution_files+=("$f")
done < <(
  fd --type f --extension js --min-depth 2 --exclude '*.test.js' --exclude 'node_modules' | sort
)

if [ ${#solution_files[@]} -eq 0 ]; then
  echo "No solution files found" >&2
  git checkout main
  git branch -d "$BRANCH"
  exit 1
fi

stubbed=()

for file in "${solution_files[@]}"; do
  # Extract exported name: match `export default <Name>` (with optional semicolon)
  exported=$(sed -n 's/^export default \([^;]*\).*/\1/p' "$file" | head -1)

  if [ -z "$exported" ]; then
    # No default export — skip (e.g. helper modules with named exports only)
    continue
  fi

  cat > "$file" <<STUB
const ${exported} = function () {
  throw new Error('Not implemented');
};
export default ${exported};
STUB

  stubbed+=("$file")
done

if [ ${#stubbed[@]} -eq 0 ]; then
  echo "No files with default exports found — nothing to stub" >&2
  git checkout main
  git branch -d "$BRANCH"
  exit 1
fi

# 5. Stage and commit only the stubbed files
git add -- "${stubbed[@]}"
git commit --no-verify -m "chore: stub solutions for ${DATE} practice"

echo "Ready. Run: npm test"
