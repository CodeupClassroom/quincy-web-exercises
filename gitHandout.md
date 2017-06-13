## Git 

  Git is a permanent record (composed of commits which are sets of facts about changes to files), with a time machine (history of commits), that allows for working in parallel universes (git branches)


### Vocabulary

- Repository: a directory that is tracked by git. The directory has a .git/ folder due to `git init` in a new project or from cloning an existing project w/ `git clone`.
- Commit: Snapshot of code in time. Commits are sets of facts about changes to files and lines of code in those files. Commits have one or more files added to them.
- Local repository: Local means your Mac, specifically it means the git enabled directory where we issue git commands, such aas `~/vagrant-lamp/sites/codeup.dev`
- Remote repository: Remote repositories are directories that are git enabled that exist somewhere other than your laptop. For our first remote repo, GitHub will serve as the remote. In the future, we will set additional remotes so we can push your code to your own server.

### Commands
- Going to `http://github.com/new` is how you make a new remote repo on GitHub.
- `git init` makes a local repository in the folder where you typed it.
- `git status` shows untracked files, tracked files with changes, files added to a commit.
- `git add index.html` stages `index.html` to be added to a commit. 
- `git add -A` stages all files and subfolders to be added to a commit.
- `git commit -m "your commit message here"` creates a commit of all the files staged for commit. Then it labels the commit with your message.
- `git commit` commits all your staged changes and brings up your editor for a commit message.
- `git remote add origin <git@repoAddress>` tells your local repo where the remote repo lives. Whne you `git push`, the commits are sent there.
- `git clone <repoAddress> .` clones the contents of the repo into the current folder
- `git clone <repoAddress> newFolder` clones the repo into ./newFolder
- `git push origin master` pushes all un-pushed commits to your rote.

### Best Practices
*If your code ain't in GitHub then it doesn't exist.*