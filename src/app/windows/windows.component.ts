
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { windows } from '../constants';

@Component({
    selector: 'app-windows',
    imports: [],
    templateUrl: './windows.component.html',
    styleUrl: './windows.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class WindowsComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: windows){}

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

  general: Shortcut[] = [
    { key: 'Ctrl + X', command: 'Cut the selected item' },
    { key: 'Ctrl + C, Ctrl + Insert', command: 'Copy the selected item' },
    { key: 'Ctrl + V, Shift + Insert', command: 'Paste the selected item' },
    { key: 'Ctrl + Shift + V', command: 'Paste as plain text' },
    { key: 'Ctrl + Z', command: 'Undo an action' },
    { key: 'Alt + Tab', command: 'Switch between open apps' },
    { key: 'Alt + F4', command: 'Close the active item, or exit the active app' },
    { key: 'Win + L', command: 'Lock your PC' },
    { key: 'Win + D', command: 'Display and hide the desktop' },
    { key: 'F2', command: 'Rename the selected item' },
    { key: 'F3', command: 'Search for a file or folder in File Explorer' },
    { key: 'F4', command: 'Display the address bar list in File Explorer' },
    { key: 'F5', command: 'Refresh the active window' },
    { key: 'F6', command: 'Cycle through screen elements in a window or on the desktop' },
    { key: 'F10', command: 'Activate the Menu bar in the active app' },
    { key: 'Alt + A', command: 'Set focus to the first icon in the Suggested actions menu' },
    { key: 'Alt + F8', command: 'Show your password on the sign-in screen' },
    { key: 'Alt + Esc', command: 'Cycle through items in the order in which they were opened' },
    { key: 'Alt + underlined letter', command: 'Perform the command for that letter' },
    { key: 'Alt + Enter', command: 'Display properties for the selected item' },
    { key: 'Alt + Spacebar', command: 'Open the shortcut menu for the active window' },
    { key: 'Alt + ←', command: 'Go back' },
    { key: 'Alt + →', command: 'Go forward' },
    { key: 'Alt + PgUp', command: 'Move up one screen' },
    { key: 'Alt + PgDn', command: 'Move down one screen' },
    {
      key: 'Ctrl + F4',
      command:
        'Close the active document (in apps that are full-screen and let you have multiple documents open at the same time)',
    },
    { key: 'Ctrl + A', command: 'Select all items in a document or window' },
    { key: 'Ctrl + D, Delete', command: 'Delete the selected item and move it to the Recycle Bin' },
    { key: 'Ctrl + E', command: 'Open Search (in most apps)' },
    { key: 'Ctrl + R, F5', command: 'Refresh the active window' },
    { key: 'Ctrl + Y', command: 'Redo an action' },
    { key: 'Ctrl + →', command: 'Move the cursor to the beginning of the next word' },
    { key: 'Ctrl + ←', command: 'Move the cursor to the beginning of the previous word' },
    { key: 'Ctrl + ↓', command: 'Move the cursor to the beginning of the next paragraph' },
    { key: 'Ctrl + ↑', command: 'Move the cursor to the beginning of the previous paragraph' },
    { key: 'Ctrl + Alt + Tab', command: 'Use the arrow keys to switch between all open apps' },
    {
      key: 'Alt + Shift + (arrow key)',
      command: 'When a group or tile is in focus on the Start menu, move it in the direction specified',
    },
    {
      key: 'Ctrl + Shift + (arrow key)',
      command: 'When a tile is in focus on the Start menu, move it into another tile to create a folder',
    },
    { key: 'Ctrl + (arrow key)', command: "Resize the Start menu when it's open" },
    {
      key: 'Ctrl + (arrow key) + Spacebar',
      command: 'Select multiple individual items in a window or on the desktop',
    },
    { key: 'Ctrl + Shift + (arrow key)', command: 'Select a block of text' },
    { key: 'Ctrl + Esc', command: 'Open Start' },
    { key: 'Ctrl + Shift + Esc', command: 'Open Task Manager' },
    { key: 'Ctrl + Shift', command: 'Switch the keyboard layout when multiple keyboard layouts are available' },
    { key: 'Ctrl + Spacebar', command: 'Turn the Chinese input method editor (IME) on or off' },
    { key: 'Shift + F10', command: 'Display the shortcut menu for the selected item' },
    {
      key: 'Shift + (arrow key)',
      command: 'Select more than one item in a window or on the desktop, or select text in a document',
    },
    { key: 'Shift + Delete', command: 'Delete the selected item without moving it to the Recycle Bin first' },
    { key: '→', command: 'Open the next menu to the right, or open a submenu' },
    { key: '←', command: 'Open the next menu to the left, or close a submenu' },
    { key: 'Esc', command: 'Stop or leave the current task' },
  ];

  windowsLogo: Shortcut[] = [
    { key: 'Win', command: 'Open or close Start' },
    { key: 'Win + A', command: 'Open Quick Settings (Updated in Windows 11)' },
    { key: 'Win + B', command: 'Set focus to the first icon in the Taskbar corner' },
    { key: 'Win + C', command: 'Open Windows Copilot (Updated in Windows 11)' },
    { key: 'Win + Shift + C', command: 'Open the charms menu' },
    {
      key: 'Win + Ctrl + C',
      command: 'Turn on color filters (enable this shortcut first in Color Filter settings)',
    },
    { key: 'Win + D', command: 'Display and hide the desktop' },
    { key: 'Win + E', command: 'Open File Explorer' },
    { key: 'Win + F', command: 'Open Feedback Hub and take a screenshot' },
    { key: 'Win + G', command: 'Open Xbox Game Bar when a game is open' },
    {
      key: 'Win + Alt + B',
      command: 'Turn HDR on or off (Applies to the Xbox Game Bar app version 5.721.7292.0 or newer)',
    },
    { key: 'Win + H', command: 'Launch voice typing (Updated in Windows 11)' },
    { key: 'Win + I', command: 'Open Settings' },
    { key: 'Win + J', command: 'Set focus to a Windows tip when one is available' },
    { key: 'Win + K', command: 'Open Cast from Quick Settings (Updated in Windows 11)' },
    {
      key: 'Win + Alt + K',
      command: 'Toggle microphone mute in apps that support Call Mute (Available starting in Windows 11, version 22H2)',
    },
    { key: 'Win + L', command: 'Lock your PC or switch accounts' },
    { key: 'Win + M', command: 'Minimize all windows' },
    { key: 'Win + Shift + M', command: 'Restore minimized windows on the desktop' },
    { key: 'Win + N', command: 'Open notification center and calendar (Updated in Windows 11)' },
    { key: 'Win + O', command: 'Lock device orientation' },
    { key: 'Win + P', command: 'Choose a presentation display mode' },
    { key: 'Win + Ctrl + Q', command: 'Open Quick Assist' },
    { key: 'Win + R', command: 'Open the Run dialog box' },
    { key: 'Win + Alt + R', command: 'Record video of game window in focus (using Xbox Game Bar)' },
    { key: 'Win + S', command: 'Open search' },
    { key: 'Win + Shift + S', command: 'Take a screenshot of part of your screen' },
    { key: 'Win + T', command: 'Cycle through apps on the taskbar' },
    { key: 'Win + U', command: 'Open Accessibility Settings' },
    {
      key: 'Win + V',
      command: "Open the clipboard history (Clipboard history isn't turned on by default)",
    },
    { key: 'Win + Shift + V', command: 'Set focus to a notification' },
    { key: 'Win + W', command: 'Open Widgets (Updated in Windows 11)' },
    { key: 'Win + X', command: 'Open the Quick Link menu' },
    { key: 'Win + Y', command: 'Switch input between Windows Mixed Reality and your desktop' },
    { key: 'Win + Z', command: 'Open the snap layouts (Updated in Windows 11)' },
    { key: 'Win + . / ;', command: 'Open emoji panel' },
    { key: 'Win + ,', command: 'Temporarily peek at the desktop' },
    { key: 'Win + Pause', command: 'Opens Start > Settings > System > About' },
    { key: 'Win + Ctrl + F', command: "Search for PCs (if you're on a network)" },
    {
      key: 'Win + number',
      command: 'Open the desktop and start the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Win + Shift + number',
      command:
        'Open the desktop and start a new instance of the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Win + Ctrl + number',
      command:
        'Open the desktop and switch to the last active window of the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Win + Alt + number',
      command:
        'Open the desktop and open the Jump List for the app pinned to the taskbar in the position indicated by the number',
    },
    {
      key: 'Win + Ctrl + Shift + number',
      command:
        'Open the desktop and open a new instance of the app located at the given position on the taskbar as an administrator',
    },
    { key: 'Win + Tab', command: 'Open Task view' },
    { key: 'Win + ↑', command: 'Maximize the window' },
    {
      key: 'Win + Alt + ↑',
      command: 'Snap window in focus to the top half of the screen (New with Windows 11)',
    },
    {
      key: 'Win + ↓',
      command: 'Remove the current app from the screen or minimize the desktop window',
    },
    {
      key: 'Win + Alt + ↓',
      command: 'Snap window in focus to the bottom half of the screen (New with Windows 11)',
    },
    {
      key: 'Win + ←',
      command: 'Maximize the app or desktop window to the left side of the screen',
    },
    {
      key: 'Win + →',
      command: 'Maximize the app or desktop window to the right side of the screen',
    },
    {
      key: 'Win + Home',
      command: 'Minimize all except the active desktop window (restores all windows on the second stroke)',
    },
    {
      key: 'Win + Shift + ↑',
      command: 'Stretch the desktop window to the top and bottom of the screen',
    },
    {
      key: 'Win + Shift + ↓',
      command: 'Restore/minimize active desktop windows vertically, maintaining width',
    },
    {
      key: 'Win + Shift + ← / →',
      command: 'Move an app or window in the desktop from one monitor to another',
    },
    { key: 'Win + Shift + Spacebar', command: 'Cycle backward through language and keyboard layout' },
    { key: 'Win + Spacebar', command: 'Switch input language and keyboard layout' },
    { key: 'Win + Ctrl + Spacebar', command: 'Change to a previously selected input' },
    { key: 'Win + Ctrl + Enter', command: 'Turn on Narrator' },
    { key: 'Win + +', command: 'Open Magnifier and zoom in' },
    { key: 'Win + -', command: 'Zoom out in Magnifier' },
    { key: 'Win + Esc', command: 'Close Magnifier' },
    { key: 'Win + /', command: 'Begin IME reconversion' },
    { key: 'Win + Ctrl + Shift + B', command: 'Wake PC from a blank or black screen' },
    { key: 'Win + PrtScn', command: 'Save full-screen screenshot to file' },
    {
      key: 'Win + Alt + PrtScn',
      command: 'Save screenshot of game window in focus to file (using Xbox Game Bar)',
    },
    { key: 'Win + Alt + Enter', command: 'Open taskbar settings (on taskbar item focus)' },
  ];

  commandPrompt: Shortcut[] = [
    { key: 'Ctrl + C, Ctrl + Insert', command: 'Copy the selected text' },
    { key: 'Ctrl + V, Shift + Insert', command: 'Paste the selected text' },
    { key: 'Ctrl + M', command: 'Enter Mark mode' },
    { key: 'Alt + selection key', command: 'Begin selection in block mode' },
    { key: '(arrow key)', command: 'Move the cursor in the direction specified' },
    { key: 'PgUp', command: 'Move the cursor by one page up' },
    { key: 'PgDn', command: 'Move the cursor by one page down' },
    { key: 'Ctrl + Home', command: 'Mark mode: Move the cursor to the beginning of the buffer' },
    { key: 'Ctrl + End', command: 'Mark mode: Move the cursor to the end of the buffer' },
    { key: 'Ctrl + ↑', command: 'Move up one line in the output history' },
    { key: 'Ctrl + ↓', command: 'Move down one line in the output history' },
    {
      key: 'Ctrl + Home',
      command:
        'History navigation: If the command line is empty, move the viewport to the top of the buffer. Otherwise, delete all the characters to the left of the cursor in the command line',
    },
    {
      key: 'Ctrl + End',
      command:
        'History navigation: If the command line is empty, move the viewport to the command line. Otherwise, delete all the characters to the right of the cursor in the command line',
    },
  ];

  dialogBox: Shortcut[] = [
    { key: 'F4', command: 'Display the items in the active list' },
    { key: 'Ctrl + Tab', command: 'Move forward through tabs' },
    { key: 'Ctrl + Shift + Tab', command: 'Move back through tabs' },
    { key: 'Ctrl + 1, 2, 3,...', command: 'Move to that tab number' },
    { key: 'Tab', command: 'Move forward through options' },
    { key: 'Shift + Tab', command: 'Move back through options' },
    {
      key: 'Alt + underlined letter',
      command: 'Perform the command (or select the option) that is used with that letter',
    },
    { key: 'Spacebar', command: 'Select or clear the check box if the active option is a check box' },
    {
      key: 'Backspace',
      command: 'Open a folder one level up if a folder is selected in the Save As or Open dialog box',
    },
    { key: '(arrow key)', command: 'Select a button if the active option is a group of option buttons' },
  ];

  fileExplorer: Shortcut[] = [
    { key: 'Alt + D', command: 'Select the address bar' },
    { key: 'Ctrl + E', command: 'Select the search box' },
    { key: 'Ctrl + F', command: 'Select the search box' },
    { key: 'Ctrl + N', command: 'Open a new window' },
    { key: 'Ctrl + T', command: 'Open a new tab and switch to it' },
    { key: 'Ctrl + W', command: "Closes the active tab. Closes the window if there's only one tab open" },
    { key: 'Ctrl + Tab', command: 'Move to the next tab' },
    { key: 'Ctrl + Shift + Tab', command: 'Move to the previous tab' },
    { key: 'Ctrl + 1, 2, 3,...', command: 'Move to that tab number' },
    { key: 'Ctrl + scroll wheel', command: 'Change the size and appearance of file and folder icons' },
    { key: 'Ctrl + Shift + E', command: 'Display all folders above the selected folder' },
    { key: 'Ctrl + Shift + N', command: 'Create a new folder' },
    { key: 'Num Lock + *', command: 'Display all subfolders under the selected folder' },
    { key: 'Num Lock + +', command: 'Display the contents of the selected folder' },
    { key: 'Num Lock + -', command: 'Collapse the selected folder' },
    { key: 'Alt + P', command: 'Display the preview panel' },
    { key: 'Alt + Enter', command: 'Open the Properties dialog box for the selected item' },
    { key: 'Alt + →', command: 'View the next folder' },
    { key: 'Alt + ↑', command: 'View the folder that the folder was in' },
    { key: 'Alt + ←', command: 'View the previous folder' },
    { key: 'Backspace', command: 'View the previous folder' },
    { key: '→', command: "Display the current selection (if it's collapsed), or select the first subfolder" },
    {
      key: '←',
      command: "Collapse the current selection (if it's expanded), or select the folder that the folder was in",
    },
    { key: 'End', command: 'Display the bottom of the active window' },
    { key: 'Home', command: 'Display the top of the active window' },
    { key: 'F11', command: 'Maximize or minimize the active window' },
  ];

  virtualDesktops: Shortcut[] = [
    { key: 'Win + Tab', command: 'Open Task view' },
    { key: 'Win + Ctrl + D', command: 'Add a virtual desktop' },
    {
      key: 'Win + Ctrl + →',
      command: 'Switch between virtual desktops you’ve created on the right',
    },
    {
      key: 'Win + Ctrl + ←',
      command: 'Switch between virtual desktops you’ve created on the left',
    },
    { key: 'Win + Ctrl + F4', command: "Close the virtual desktop you're using" },
  ];

  taskbar: Shortcut[] = [
    { key: 'Shift + click button', command: 'Open an app or quickly open another instance of an app' },
    { key: 'Ctrl + Shift + click button', command: 'Open an app as an administrator' },
    { key: 'Shift + right-click button', command: 'Show the window menu for the app' },
    { key: 'Shift + right-click grouped button', command: 'Show the window menu for the group' },
    { key: 'Ctrl + click grouped button', command: 'Cycle through the windows of the group' },
  ];

  settings: Shortcut[] = [
    { key: 'Win + I', command: 'Open settings' },
    { key: 'Backspace', command: 'Go back to the settings home page' },
  ];
}
