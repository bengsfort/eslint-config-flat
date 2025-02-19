# @bengsfort/eslint-config-flat

Repo containing my personal eslint configs. Flat version of [@bengsfort/eslint-config](https://github.com/bengsfort/eslint-config). Extensions are welcome!

## Releasing

### Automated Release Flow

Once a PR hits main, the [release workflow](./.github/workflows/release.yml) will trigger and any changesets will be handled automatically.

### Manual Release Flow

1. When a new feature or change has been made, run `pnpm add-change` to create a changeset (this should be commited).
2. When ready to release, run `pnpm bump-version` to apply all changes and update changelogs.
3. Run `pnpm install` to update lockfile and rebuild packages.
4. Commit and run `pnpm ci:publish` to publish.

## @todo

[ ] Proper documentation and code examples.
