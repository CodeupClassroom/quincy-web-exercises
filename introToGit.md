# Intro To Git

SCM: Source Control Managment

VCS: Version Control System

Who has used a SCM system? Who has used a VCS?

Everyone has used a VCS (formally or informally) (knowingly or unknowingly)

Who has a bank account?

What is a balance? Not just a number, but the end result of the reduction of
transaction values.

Banks store transactions, that is, a record of *changes* to your balance

What was my balance last week, this week? different sets of changes

Other VCS:

- save points in video games
- undo in your editor
- google docs
- `resume2_final_final.pdf`

Turns out this is an important problem in software, and lots of smart people
have spent lots of time trying to solve this problem.

git: progromatic formalization of the above

- in combination with *remotes*, also functions as a backup system
- bank account: I keep a ledger of transactions, and so does my bank

How to use git?

- add: fill out withdrawal forms / have multiple checks to deposit
- commit: give the forms to the teller, put them in the system
- push / pull: sync up

repository: a project; a directory managed by git

```
# create a repository
git init

git status

# add files (decide what changes we want to commit)
git add some-file.html
git add css/my-stylesheet.css css/bootstrap.css

# commit (formally track the changes we've added)
# write a commit message
git commit -v

# view the history
git log
git log --oneline

# view a specific change
git show INSERT_HASH_HERE
```

```
# show the command line help
git INSERT_COMMAND_HERE -h
# get the manual page
git help INSERT_COMMAND_HERE
```