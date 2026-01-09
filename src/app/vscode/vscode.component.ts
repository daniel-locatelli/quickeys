
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { vsCode } from '../constants';

@Component({
    selector: 'app-vscode',
    imports: [],
    templateUrl: './vscode.component.html',
    styleUrl: './vscode.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class VscodeComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: vsCode){}

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
    { key: 'Ctrl + Shift + P, F1', command: 'Show Command Palette' },
    { key: 'Ctrl + P', command: 'Quick Open, Go to File…' },
    { key: 'Ctrl + Shift + N', command: 'New window/instance' },
    { key: 'Ctrl + Shift + W', command: 'Close window/instance' },
    { key: 'Ctrl + ,', command: 'User Settings' },
    { key: 'Ctrl + K  Ctrl + S', command: 'Keyboard Shortcuts' },
    { key: 'Ctrl + Shift + C', command: 'Open new external terminal'}
  ];

  basicEditing: Shortcut[] = [
    { key: 'Ctrl + X', command: 'Cut line (empty selection)' },
    { key: 'Ctrl + C', command: 'Copy line (empty selection)' },
    { key: 'Alt + ↑ / ↓', command: 'Move line up/down' },
    { key: 'Shift + Alt  +  ↓ / ↑', command: 'Copy line up/down' },
    { key: 'Ctrl + Shift + K', command: 'Delete line' },
    { key: 'Ctrl + Enter', command: 'Insert line below' },
    { key: 'Ctrl + Shift + Enter', command: 'Insert line above' },
    { key: 'Ctrl + Shift + \\', command: 'Jump to matching bracket' },
    { key: 'Ctrl + ] / [', command: 'Indent/outdent line' },
    { key: 'Home / End', command: 'Go to beginning/end of line' },
    { key: 'Ctrl + Home', command: 'Go to beginning of file' },
    { key: 'Ctrl + End', command: 'Go to end of file' },
    { key: 'Ctrl + ↑ / ↓', command: 'Scroll line up/down' },
    { key: 'Alt + PgUp / PgDn', command: 'Scroll page up/down' },
    { key: 'Ctrl + Shift + [', command: 'Fold (collapse) region' },
    { key: 'Ctrl + Shift + ]', command: 'Unfold (uncollapse) region' },
    { key: 'Ctrl + K Ctrl + [', command: 'Fold (collapse) all subregions' },
    { key: 'Ctrl + K Ctrl + ]', command: 'Unfold (uncollapse) all subregions' },
    { key: 'Ctrl + K Ctrl + 0', command: 'Fold (collapse) all regions' },
    { key: 'Ctrl + K Ctrl + J', command: 'Unfold (uncollapse) all regions' },
    { key: 'Ctrl + K Ctrl + C', command: 'Add line comment' },
    { key: 'Ctrl + K Ctrl + U', command: 'Remove line comment' },
    { key: 'Ctrl + /', command: 'Toggle line comment' },
    { key: 'Shift + Alt + A', command: 'Toggle block comment' },
    { key: 'Alt + Z', command: 'Toggle word wrap' },
  ];

  navigation: Shortcut[] = [
    { key: 'Ctrl + T', command: 'Show all Symbols' },
    { key: 'Ctrl + G', command: 'Go to Line...' },
    { key: 'Ctrl + P', command: 'Go to File...' },
    { key: 'Ctrl + Shift + O', command: 'Go to Symbol...' },
    { key: 'Ctrl + Shift + M', command: 'Show Problems panel' },
    { key: 'F8', command: 'Go to next error or warning' },
    { key: 'Shift + F8', command: 'Go to previous error or warning' },
    { key: 'Ctrl + Shift + Tab', command: 'Navigate editor group history' },
    { key: 'Alt + ← / →', command: 'Go back / forward' },
    { key: 'Ctrl + M', command: 'Toggle Tab moves focus' },
  ];

  searchAndReplace: Shortcut[] = [
    { key: 'Ctrl + F', command: 'Find' },
    { key: 'Ctrl + H', command: 'Replace' },
    { key: 'F3 / Shift + F3', command: 'Find next/previous' },
    { key: 'Alt + Enter', command: 'Select all occurences of Find match' },
    { key: 'Ctrl + D', command: 'Add selection to next Find match' },
    { key: 'Ctrl + K Ctrl + D', command: 'Move last selection to next Find match' },
    { key: 'Alt + C / R / W', command: 'Toggle case-sensitive / regex / whole word' },
  ];

  //Mouse actions are still hard-coded
  multiCursorAndSelection: Shortcut[] = [
    { key: 'Alt + Click', command: 'Insert cursor' },
    { key: 'Ctrl + Alt + ↑ / ↓', command: 'Insert cursor above / below' },
    { key: 'Ctrl + U', command: 'Undo last cursor operation' },
    { key: 'Shift + Alt + I', command: 'Insert cursor at end of each line selected' },
    { key: 'Ctrl + L', command: 'Select current line' },
    { key: 'Ctrl + Shift + L', command: 'Select all occurrences of current selection' },
    { key: 'Ctrl + F2', command: 'Select all occurrences of current word' },
    { key: 'Shift + Alt + →', command: 'Expand selection' },
    { key: 'Shift + Alt + ←', command: 'Shrink selection' },
    { key: 'Shift + Alt + (drag mouse)', command: 'Column (box) selection' },
    { key: 'Ctrl + Shift + Alt + (arrow key)', command: 'Column (box) selection' },
    { key: 'Ctrl + Shift + Alt + PgUp/PgDn', command: 'Column (box) selection page up/down' },
  ];

  richLanguagesEditing: Shortcut[] = [
    { key: 'Ctrl + Space, Ctrl + I', command: 'Trigger suggestion' },
    { key: 'Ctrl + Shift + Space', command: 'Trigger parameter hints' },
    { key: 'Shift + Alt + F', command: 'Format document' },
    { key: 'Ctrl + K  Ctrl + F', command: 'Format selection' },
    { key: 'F12', command: 'Go to Definition' },
    { key: 'Alt + F12', command: 'Peek Definition' },
    { key: 'Ctrl + K F12', command: 'Open Definition to the side' },
    { key: 'Ctrl + .', command: 'Quick Fix' },
    { key: 'Shift + F12', command: 'Show References' },
    { key: 'F2', command: 'Rename Symbol' },
    { key: 'Ctrl + K  Ctrl + X', command: 'Trim trailing whitespace' },
    { key: 'Ctrl + K  M', command: 'Change file language' },
  ];

  editorManagement: Shortcut[] = [
    { key: 'Ctrl + F4, Ctrl + W', command: 'Close editor' },
    { key: 'Ctrl + K  F', command: 'Close folder' },
    { key: 'Ctrl + \\', command: 'Split editor' },
    { key: 'Ctrl + 1 / 2 / 3', command: 'Ctrl +  1 / 2 / 3 Focus into 1st, 2nd or 3rd editor group' },
    { key: 'Ctrl + K  Ctrl + ← / →', command: 'Focus into previous/next editor group' },
    { key: 'Ctrl + Shift + PgUp / PgDn', command: 'Move editor left/right' },
    { key: 'Ctrl + K ← / →', command: 'Move active editor group' },
  ];

  fileManagement: Shortcut[] = [
    { key: 'Ctrl + N', command: 'New File' },
    { key: 'Ctrl + O', command: 'Open File...' },
    { key: 'Ctrl + S', command: 'Save' },
    { key: 'Ctrl + Shift + S', command: 'Save As...' },
    { key: 'Ctrl + K  S', command: 'Save All' },
    { key: 'Ctrl + F4', command: 'Close' },
    { key: 'Ctrl + K  Ctrl + W', command: 'Close All' },
    { key: 'Ctrl + Shift + T', command: 'Reopen closed editor' },
    { key: 'Ctrl + K  Enter', command: 'Keep preview mode editor open' },
    { key: 'Ctrl +  Tab', command: 'Open next' },
    { key: 'Ctrl + Shift + Tab', command: 'Open previous' },
    { key: 'Ctrl + K  P', command: 'Copy path of active file' },
    { key: 'Ctrl + K  R', command: 'Reveal active file in Explorer' },
    { key: 'Ctrl + K  O', command: 'Show active file in new window/instance' },
  ];

  display: Shortcut[] = [
    { key: 'F11', command: 'Toggle full screen' },
    { key: 'Shift + Alt + 0', command: 'Toggle editor layout (horizontal/vertical)' },
    { key: 'Ctrl + = / -', command: 'Zoom in/out' },
    { key: 'Ctrl + B', command: 'Toggle Sidebar visibility' },
    { key: 'Ctrl + J', command: 'Toggle Panel visibility'},
    { key: 'Ctrl + Shift + E', command: 'Show Explorer / Toggle focus' },
    { key: 'Ctrl + Shift + F', command: 'Show Search' },
    { key: 'Ctrl + Shift + G', command: 'Show Source Control' },
    { key: 'Ctrl + Shift + D', command: 'Show Debug' },
    { key: 'Ctrl + Shift + X', command: 'Show Extensions' },
    { key: 'Ctrl + Shift + H', command: 'Replace in files' },
    { key: 'Ctrl + Shift + J', command: 'Toggle Search details' },
    { key: 'Ctrl + Shift + U', command: 'Show Output panel' },
    { key: 'Ctrl + Shift + V', command: 'Open Markdown preview' },
    { key: 'Ctrl + K  V', command: 'Open Markdown preview to the side' },
    { key: 'Ctrl + K  Z', command: 'Zen Mode (Esc Esc to exit)' },
  ];

  debug: Shortcut[] = [
    { key: 'F9', command: 'Toggle breakpoint' },
    { key: 'F5', command: 'Start/Continue' },
    { key: 'Shift + F5', command: 'Stop' },
    { key: 'F11 / Shift + F11', command: 'Step into/out' },
    { key: 'F10', command: 'Step over' },
    { key: 'Ctrl + K  Ctrl + I', command: 'Show hover' },
  ];

  integratedTerminal: Shortcut[] = [
    { key: 'Ctrl + `', command: 'Show integrated terminal' },
    { key: 'Ctrl + Shift + `', command: 'Create new terminal' },
    { key: 'Ctrl + C', command: 'Copy selection' },
    { key: 'Ctrl + V', command: 'Paste into active terminal' },
    { key: 'Ctrl + ↑ / ↓', command: 'Scroll up/down' },
    { key: 'Shift + PgUp / PgDn', command: 'Scroll page up/down' },
    { key: 'Ctrl + Home / End', command: 'Scroll to top/bottom' },
  ];
}
