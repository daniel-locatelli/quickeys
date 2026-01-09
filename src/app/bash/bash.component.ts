import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { bash } from '../constants';

@Component({
  selector: 'app-bash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bash.component.html',
  styleUrl: './bash.component.css',
  host: {
    class: 'shortcuts',
  },
})
export class BashComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: bash ){}

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

  // Automatic focus after view init (to allow to navigate with arrows up and down)
  @ViewChild('scroll') scrollElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (this.scrollElement && this.scrollElement.nativeElement) {
      this.scrollElement.nativeElement.focus();
    }
  }

  navigation = [
    { key: 'cd', command: 'Change directory' },
    { key: 'pwd', command: 'Print working directory' },
    { key: 'ls', command: 'List files and directories' },
    { key: 'mkdir', command: 'Create a directory' },
    { key: 'rmdir', command: 'Remove an empty directory' },
    { key: 'pushd', command: 'Save and change the current directory' },
    { key: 'popd', command: 'Return to the directory saved by pushd' },
    { key: 'dirs', command: 'Display the list of currently remembered directories' },
  ];

  fileOperations = [
    { key: 'cp', command: 'Copy files or directories' },
    { key: 'mv', command: 'Move or rename files or directories' },
    { key: 'rm', command: 'Remove files or directories' },
    { key: 'touch', command: 'Create an empty file' },
    { key: 'find', command: 'Search for files in a directory hierarchy' },
    { key: 'find ./ -name "*.exe" -type f -print0', command: 'Will start Find in the current directory, will search by name for files that match the "*.exe" search string (notice that surrounding a word with * will find all names that include that word as a fragment). Directories will not be shown because it is searching for files only, with -type f. The print0 argument tells Find to not consider whitespace as the end of a file name.' },
    { key: 'find . -type f -printf "%s %p\n" |sort -nr|head', command: 'Will search in the current directory and its subdirectories for files, it will print the size and their path, sorting by size and showing only the first ten (will return a list with the 10 largest files in a directory and its subdirectories).' },
    { key: 'ln', command: 'Create hard or symbolic links' },
    { key: 'stat', command: 'Display file or file system status' },
    { key: 'file', command: 'Determine file type' },
  ];

  textManipulation = [
    { key: 'cat', command: 'Concatenate and display the content of files' },
    { key: 'grep', command: 'Search for a patterns in files' },
    { key: 'grep "text" filename', command: 'Search for text in a file' },
    { key: 'grep "text" .', command: 'Search for text in all files of current directory' },
    { key: 'grep -r "text" .', command: 'Search for text in all files of current directory and subdirectories (recursively)' },
    { key: 'grep -R --exclude-dir=node_modules "text" /path/to/search', command: 'Search for text in all files of current directory and subdirectories (recursively) excluding node_modules' },
    { key: 'sed', command: 'Stream editor for filtering and transforming text' },
    { key: 'awk', command: 'Pattern scanning and processing language' },
    { key: 'sort', command: 'Sort lines of text files' },
    { key: 'uniq', command: 'Report or omit repeated lines' },
    { key: 'cut', command: 'Remove sections from each line of a file' },
  ];

  fileViewing = [
    { key: 'less', command: 'Display file content one screen at a time' },
    { key: 'more', command: 'Display file content one screen at a time (less feature-rich than less)' },
    { key: 'head', command: 'Display the beginning of a file' },
    { key: 'tail', command: 'Display the end of a file' },
  ];

  systemInformation = [
    { key: 'uname', command: 'Display system information' },
    { key: 'hostname', command: 'Display or set the system hostname' },
    { key: 'df', command: 'Display disk space usage' },
    { key: 'free', command: 'Display amount of free and used memory' },
    { key: 'lshw', command: 'List hardware configuration' },
    { key: 'lscpu', command: 'Display information about the CPU architecture' },
    { key: 'lsblk', command: 'List information about block devices' },
  ];

  processManagement = [
    { key: 'ps', command: 'Display information about processes' },
    { key: 'kill', command: 'Terminate a process' },
    { key: 'top', command: 'Display and update sorted information about system processes' },
    { key: 'nice', command: 'Run a command with modified scheduling priority' },
    { key: 'nohup', command: 'Run a command immune to hangups' },
    { key: 'renice', command: 'Alter priority of running processes' },
    { key: 'strace', command: 'Trace system calls and signals' },
  ];

  networking = [
    { key: 'ping', command: 'Send ICMP echo requests to a network host' },
    { key: 'traceroute', command: 'Print the route that packets take to reach a network host' },
    {
      key: 'netstat',
      command:
        'Display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships',
    },
    { key: 'ssh', command: 'OpenSSH SSH client' },
    { key: 'scp', command: 'Secure copy (remote file copy program)' },
    { key: 'rsync', command: 'Remote file copy and synchronization' },
  ];

  permissions = [
    { key: 'chmod', command: 'Change file permissions' },
    { key: 'chown', command: 'Change file owner and group' },
    { key: 'sudo', command: 'Execute a command as the superuser' },
    { key: 'su', command: 'Change user ID or become superuser' },
    { key: 'chroot', command: 'Run a command with a different root directory' },
  ];

  compressionAndArchiving = [
    { key: 'tar', command: 'Create, extract, or list compressed or uncompressed archives' },
    { key: 'gzip', command: 'Compress files using gzip' },
    { key: 'gunzip', command: 'Decompress files compressed with gzip' },
    { key: 'zip', command: 'Package and compress files' },
    { key: 'unzip', command: 'Extract compressed files in a ZIP archive' },
  ];

  shellScripting = [
    { key: 'echo', command: 'Display a message' },
    { key: 'read', command: 'Read input from the user' },
    { key: 'if', command: 'Conditional statement' },
    { key: 'else', command: 'Conditional statement (else branch)' },
    { key: 'elif', command: 'Conditional statement (else if branch)' },
    { key: 'for', command: 'Looping construct' },
    { key: 'while', command: 'Looping construct' },
    { key: 'case', command: 'Case statement for conditional branching' },
    { key: 'trap', command: 'Run a command when a signal is set(builtin)' },
    { key: 'source', command: 'Run commands from a file in the current shell' },
  ];
}
