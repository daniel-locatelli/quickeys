import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { git } from '../constants';

@Component({
    selector: 'app-git',
    imports: [CommonModule],
    templateUrl: './git.component.html',
    styleUrl: './git.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class GitComponent implements AfterViewInit, OnInit {
  constructor(private title: Title, private meta: Meta, private constants: git) {}

  ngOnInit() {
    this.title.setTitle(this.constants.title);
    this.meta.updateTag({ name: 'description', content: this.constants.description });
    this.meta.updateTag({ property: 'og:url', content: this.constants.url });
    this.meta.updateTag({ property: 'og:title', content: this.constants.title });
    this.meta.updateTag({ property: 'og:description', content: this.constants.description });
    this.meta.updateTag({ property: 'og:image', content: this.constants.image });
    this.meta.updateTag({ property: 'twitter:card', content: this.constants.twitterCard });
    this.meta.updateTag({ property: 'twitter:url', content: this.constants.url });
    this.meta.updateTag({ property: 'twitter:title', content: this.constants.title });
    this.meta.updateTag({ property: 'twitter:description', content: this.constants.description });
    this.meta.updateTag({ property: 'twitter:image', content: this.constants.image });
  }

  @ViewChild('scroll') scrollElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      this.scrollElement.nativeElement.focus();
    }
  }

  repositorySetup: Shortcut[] = [
    { key: 'git init', command: 'Initialize a new repository' },
    { key: 'git clone <repository-url>', command: 'Clone a repository' },
  ];

  configuration: Shortcut[] = [
    { key: 'git config --global user.name "Name"', command: 'Set user information' },
    { key: 'git config --global user.email "Email"', command: 'Set user email' },
    { key: 'git config --global core.editor <editor>', command: 'Set default text editor' },
  ];

  basicSnapshotting: Shortcut[] = [
    // Basic Snapshotting
    { key: 'git add <file(s)>', command: 'Add changes to the staging area' },
    { key: 'git commit -m "Commit message"', command: 'Commit changes' },
    { key: 'git rm <file(s)>', command: 'Remove files from the working directory and staging area' },
  ];

  branchingAndMerging: Shortcut[] = [
    // Branching and Merging
    { key: 'git branch <branch-name>', command: 'Create a new branch' },
    { key: 'git checkout <branch-name>', command: 'Switch to a branch' },
    { key: 'git checkout -b <new-branch-name>', command: 'Create and switch to a new branch' },
    { key: 'git merge <branch-name>', command: 'Merge branches' },
  ];

  remoteRepositories: Shortcut[] = [
    // Remote Repositories
    { key: 'git remote add <remote-name> <repository-url>', command: 'Add a remote repository' },
    { key: 'git remote set-url origin <new-repository-url>', command: 'Change remote repository' },
    { key: 'git fetch <remote-name>', command: 'Fetch changes from a remote repository' },
    { key: 'git pull <remote-name> <branch-name>', command: 'Pull changes from a remote repository' },
    { key: 'git push <remote-name> <branch-name>', command: 'Push changes to a remote repository' },
    { key: 'git remote -v', command: 'Show URL of remote branches' },
  ];

  inspectingChanges: Shortcut[] = [
    // Inspecting Changes
    { key: 'git status', command: 'Show modified files not yet staged' },
    { key: 'git diff', command: 'Show changes between commits' },
    { key: 'git log', command: 'Show commit history' },
  ];

  undoingChanges: Shortcut[] = [
    // Undoing Changes
    {
      key: 'git commit --amend',
      command: 'Change the most recent commit message. To save changes in the vi editor type :wq Enter',
    },
    { key: 'git checkout -- <file(s)>', command: 'Discard changes in the working directory' },
    { key: 'git reset --soft HEAD^', command: 'Undo the last commit (local only)' },
    { key: 'git reset HEAD^', command: 'Undo the last commit and unstage changes' },
    {
      key: 'git fetch --all \n git reset --hard origin/<branch-name>',
      command: 'Discard local changes and pull from remote',
    },
  ];
}
