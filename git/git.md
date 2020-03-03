# Point to Remember
1. Always pull before commiting.

# Git Command Line

[Tutorial Link: Corey Shafer](https://www.youtube.com/watch?v=HVsySz-h9r4&list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)

## What is git ?
Git is a distributed version control system. SVN on the other hand is central version control system.
### Difference in central vs distributed version control system.
Central verstion control system are located at one place. It creates problems if the central server is down or some networking problem is there. If the central server crashes then all the data is lost at once. 

While in case of git, every body has a local repository. Each person contributing holds a copy of entire repository in their system (I think thats possible by using central repository such has github or bitbucket) based on the last time they sinked together. So, event if we don't have access to the remote repositry we can stil view each and every change that has ever been made to that repository. It just goes like saying evey developer has a backup of entire repository. Event if something wrong happens each developer has a copy. This is why it is called __Distributed Verstion Control__ system.

## Basic commands

### check vesion
```bash
git --version
```

### set config values
```bash
git config --global user.name "Rohit Kumar"
git config --global user.email "rohit.mnnit2017@gmail.com"

git config --list 
```

### Need help?
```bash
git <command> --help
```
---

## Moving existing local project to remote repository.

first we do git init within the project directory. It initialize the git repository. It will place a .git directory inside the repository.
```bash
git init
```
If we no longer wants our local repository to be tracked by git we just remove this .git directory.

```bash
rm -rf .git
```

### Git Ignore
```bash
touch .gitignore
```
It is just a simple text file where we add those file which we want git to ignore. We can also use wild cards.

Follwing files are ignored:
```
.project
settings.txt
*.pyc
```

### Git Status
The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git. Status output does not show you any information regarding the committed project history.

__it will ignore all matching files in .ignore file.__

```bash
git status
```


### The Three area of Git
* Working directory 
* Staging Area
* Commited Area (files)

untracked and modifed files will be in working directroy.

statging area is where we organise what we want to be commited. Here we can pick and chose what we want to be commited and what not to be commited. Suppose we have multiple files and we want some of them to be commited with different with different commit message then we can only bring files we want to commit is stating area. For example, we made so many files and we don't want all of them just to be commited with comment such as 'made lot of changes' but we want specific comment for each changes we made with each of the file. 

### Adding file to Stating Area
```bash
git add
git add -A            --- add everything to stating area
```
### Removing file from Staging Area
```bash
git reset <filename>  --- removes particular file
git reset             --- removes every thing
```


## Cloning a Remote Repository

```bash
git clone <url> <destination>
git clone http://github.com/something.something.git .
```

## Viewing Information About Remote Repository

we have following two commands:
* git remote -v
* git branch -a

```
git remote -v
```

```
git branch -a
```
git branch lits all branches including both local and remote.


# Commiting the changes we made.

for sending the commits to the remote directory we need to:
* commit those changes locally.
* add to the stating area
* commit the changes


## Git Diff

```
git diff
```
git diff shows the changes that we have made to the code. It show all the __added and deleted lines. cool.__


# Git Branches
In real world workflows we create branches for the features we are working on and work on those branches.

```
git branch              --- list all branches
git branch feature
git checkout feature
```

## After commit push local feature branch to remove repository

```
git push -u feature
```
here -u switch tells git to associalte local feature branch with remote feature branch and in future instead of writing *git push -u feature* we will simply do *git push or git pull* and it will just know that these two are same.


## Merging branches
checkout to the branch where you want them to be merged. Then run.
```
git merge feature
```

Since changes are merged we no longer required *feature branch* we can delete it.
```
git branch -d feature           
git push origin --delete feature
```
the second command is to delete the remote branch also.


to see what branches have been merged
```
git branch --merged
```

# Undoing some common mistakes
[Corey Shafer: Tutorial](https://www.youtube.com/watch?v=FdZecVxzJbk&list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx&index=2)


### We made some bunch of changes in code but now we don't want any of those.

```
git checkout <filename>
```
This command will take out all the changes made since the last commit. We will be exactly same state of previous commit.

### we supplied wrong commit message.
how do we modify the commit message without doing another commit ?

__but commit hash will change__
: becuase git want to keep track of everything.

but untill the changes are own sytem we can modify the history but as soon as the changes are moved to the central repositry we should not do something like this becaue it can affect something badly.


```
git commit --amend -m "new commit message"
```

## One file was left by mistake from commiting
We don't want to make new commit. we want this file to be part of last commit. 

first we will bring file to be commited in the staging area.

```
git add <filename>
git commit --amend
```

## Making changes to wrong branch without realizing
we created feature branch for all the new code but forgot to swith to that branch and instead made changes to the master branch itself.

* we want all the new commit to move to the feature branch
* we want our master branch to have excatly one commit, which it had originally.

