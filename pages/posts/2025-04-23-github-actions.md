---
title: Replace simple sub-GitHub Actions with plain run
date: 2025-04-23
published: true
canonical_url: false
description: "Use the GH CLI directly instead of wrappers you don't need"
---

I used to believe that running the GitHub CLI inside GitHub Actions was hard, which lead to using sub-actions for small things like creating a release.

Turns out it was trivially easy. Yesterday, I replaced a release-sub action with one line of invoking the CLI.

This post is me telling you it is not hard, which I've now learned.

I started with this yaml:

```
- name: Step 8 - Create GitHub release
  id: create_release
  uses: elgohr/Github-Release-Action@v5
  with:
    title: ${{ env.title }}
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

And ended up with this one:

```
- name: Step 8 - Create GitHub release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run:
    gh release create '${{ steps.version.outputs.version }}' -t ${{ env.title }} --generate-notes
```

Lower maintenance costs, better overview and increased security. It also allowed me to do versioning of the releases that aligned with the versioning scheme I'm using on Maven central. Win-win.