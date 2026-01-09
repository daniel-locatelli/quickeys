import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { googleChromeDev } from '../constants';

@Component({
    selector: 'app-chromedev',
    imports: [CommonModule],
    templateUrl: './chromedev.component.html',
    styleUrl: './chromedev.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class ChromedevComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: googleChromeDev){}

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

  openDevTools: Shortcut[] = [
    { key: 'F12, Ctrl + Shift + I', command: 'Open whatever panel you used last' },
    { key: 'Ctrl + Shift + J', command: 'Open the Console panel' },
    { key: 'Ctrl + Shift + C', command: 'Open the Elements panel' },
  ];

  global: Shortcut[] = [
    { key: '? or F1', command: 'Show Settings' },
    { key: 'Ctrl + ]', command: 'Focus the next panel' },
    { key: 'Ctrl + [', command: 'Focus the previous panel' },
    {
      key: 'Ctrl + Shift + D',
      command:
        'Switch to last used docking position. If DevTools has been in its default position, then this undocks DevTools into a separate window',
    },
    { key: 'Ctrl + Shift + M', command: 'Toggle Device Mode' },
    { key: 'Ctrl + Shift + C', command: 'Toggle Inspect Element Mode' },
    { key: 'Ctrl + Shift + P', command: 'Open the Command Menu' },
    { key: 'Escape', command: 'Toggle the Drawer' },
    { key: 'F5 or Ctrl + R', command: 'Normal reload' },
    { key: 'Ctrl + F5 or Ctrl + Shift + R', command: 'Hard reload' },
    {
      key: 'Ctrl + F',
      command:
        'Search for text within the current panel. Supported only in the Elements, Console, Sources, Performance, Memory, JavaScript Profiler, and Quick Source panels.',
    },
    {
      key: 'Ctrl + Shift + F',
      command: 'Opens the Search tab in the Drawer, which lets you search for text across all loaded resources',
    },
    { key: 'Ctrl + O or Ctrl + P', command: 'Open a file in the Sources panel' },
    { key: 'Ctrl + Shift + +', command: 'Zoom in' },
    { key: 'Ctrl + -', command: 'Zoom out' },
    { key: 'Ctrl + 0', command: 'Restore default zoom level' },
    {
      key: 'Press Ctrl + O to open the Command Menu, type ! followed by the name of the script, then press Enter',
      command: 'Run snippet',
    },
  ];

  elementsPanel: Shortcut[] = [
    { key: 'Ctrl + Z', command: 'Undo change' },
    { key: 'Ctrl + Y', command: 'Redo change' },
    { key: '↑ / ↓', command: 'Select the element above / below the currently-selected element' },
    {
      key: '→',
      command:
        'Expand the currently-selected node. If the node is already expanded, this shortcut selects the element below it',
    },
    {
      key: '←',
      command:
        'Collapse the currently-selected node. If the node is already collapsed, this shortcut selects the element above it',
    },
    {
      key: "Hold Ctrl + Alt then click the arrow icon next to the element's name",
      command: 'Expand or collapse the currently-selected node and all of its children',
    },
    { key: 'Enter', command: 'Toggle Edit Attributes mode on the currently-selected element' },
    { key: 'Tab / Shift + Tab', command: 'Select the next / previous attribute after entering Edit Attributes mode' },
    { key: 'H', command: 'Hide the currently-selected element' },
    { key: 'F2', command: 'Toggle Edit as HTML mode on the currently-selected element' },
  ];
  stylesPanel: Shortcut[] = [
    { key: 'Hold Ctrl then click the property value', command: 'Go to the line where a property value is declared' },
    {
      key: 'Hold Shift then click the Color Preview box next to the value',
      command: 'Cycle through the RGBA, HSLA, and Hex representations of a color value',
    },
    {
      key: 'Click a property name or value then press Tab / Shift + Tab',
      command: 'Select the next / previous property or value',
    },
    {
      key: 'Click a value then press Alt + ↑ / Alt + ↓',
      command: 'Increment / decrement a property value by 0.1',
    },
    { key: 'Click a value then press ↑ / ↓', command: 'Increment / decrement a property value by 1' },
    {
      key: 'Click a value then press Shift + ↑ / Shift + ↓',
      command: 'Increment / decrement a property value by 10',
    },
    {
      key: 'Click a value then press Ctrl + ↑ / Ctrl + ↓',
      command: 'Increment / decrement a property value by 100',
    },
    {
      key: 'Hold Shift then click the Angle Preview box next to the value',
      command:
        'Cycle through the degrees (deg), gradians (grad), radians (rad), and turns (turn) representations of an angle value',
    },
    {
      key: 'Click the Angle Preview box next to the value then press ↑ / ↓',
      command: 'Increment / decrement an angle value by 1',
    },
    {
      key: 'Click the Angle Preview box next to the value then press Shift + ↑ / Shift + ↓',
      command: 'Increment / decrement an angle value by 10',
    },
    {
      key: 'Shift, click / mouse slide on the Angle Clock Overlay',
      command: 'Increment / decrement an angle value by 15',
    },
  ];
  sourcesPanel: Shortcut[] = [
    {
      key: 'F8 or Ctrl + \\',
      command: 'Pause script execution (if currently running) or resume (if currently paused)',
    },
    { key: 'F10 or Ctrl + `', command: 'Step over next function call' },
    { key: 'F11 or Ctrl + ;', command: 'Step into next function call' },
    { key: 'Shift + F11 or Ctrl + Shift + ;', command: 'Step out of current function' },
    { key: 'Hold Ctrl and then click the line of code', command: 'Continue to a certain line of code while paused' },
    { key: 'Ctrl + . / Ctrl + ,', command: 'Select the call frame below / above the currently-selected frame' },
    { key: 'Ctrl + S', command: 'Save changes to local modifications' },
    { key: 'Ctrl + Alt + S', command: 'Save all changes' },
    { key: 'Ctrl + G', command: 'Go to line' },
    {
      key: 'Press Ctrl + O to open the Command Menu, type : followed by the line number, then press Enter',
      command: 'Jump to a line number of the currently-open file',
    },
    {
      key: 'Press Ctrl + O to open the Command Menu, type :, then the line number, :, then the column number, then press Enter',
      command: 'Jump to a column of the currently-open file (e.g., line 5, column 9)',
    },
    {
      key: 'Press Ctrl + Shift + O, then type in the name of the declaration / rule set, or select it from the list of options',
      command:
        'Go to a function declaration (if currently-open file is HTML or a script), or a rule set (if currently-open file is a stylesheet)',
    },
    { key: 'Alt + W', command: 'Close the active tab' },
    { key: 'Ctrl + PgUp or PgDn', command: 'Open next or previous tab' },
    { key: 'Ctrl + Shift + Y', command: 'Toggle the Navigation sidebar on the left' },
    { key: 'Ctrl + Shift + H', command: 'Toggle the Debugger sidebar on the right' },
  ];
  codeEditor: Shortcut[] = [
    { key: 'Ctrl + Delete', command: 'Delete all characters in the last word, up to the cursor' },
    {
      key: 'Focus your cursor on the line and then press Ctrl + B',
      command: 'Add or remove a line-of-code breakpoint',
    },
    {
      key: 'Focus your cursor on the line and then press Ctrl + Alt + B',
      command: 'Open the breakpoint edit dialog to edit conditional breakpoints or logpoints',
    },
    { key: 'Ctrl + M', command: 'Go to matching bracket' },
    {
      key: 'Ctrl + /',
      command:
        'Toggle single-line comment. If multiple lines are selected, DevTools adds a comment to the start of each line',
    },
    {
      key: 'Ctrl + D / Ctrl + U',
      command:
        'Select / de-select the next occurrence of whatever word the cursor is on. Each occurrence is highlighted simultaneously',
    },
  ];

  networkPanel: Shortcut[] = [
    { key: 'Ctrl + E', command: 'Start / stop recording' },
    { key: 'Ctrl + R', command: 'Record a reload' },
    { key: 'R', command: 'Replay a selected XHR request' },
    { key: 'Escape', command: 'Hide the details of a selected request' },
  ];

  performancePanel: Shortcut[] = [
    { key: 'Ctrl + E', command: 'Start / stop recording' },
    { key: 'Ctrl + S', command: 'Save recording' },
    { key: 'Ctrl + O', command: 'Load recording' },
  ];

  memoryPanel: Shortcut[] = [{ key: 'Ctrl + E', command: 'Start / stop recording (Windows/Linux)' }];

  consolePanel: Shortcut[] = [
    { key: '→, Tab', command: 'Accept autocomplete suggestion' },
    { key: 'Escape', command: 'Reject autocomplete suggestion' },
    { key: '↑ / ↓, Ctrl + P / N', command: 'Navigate the autocomplete list up or down' },
    { key: '↑', command: 'Get previous statement' },
    { key: '↓', command: 'Get next statement' },
    { key: 'Ctrl + `', command: 'Focus the Console' },
    { key: 'Ctrl + L', command: 'Clear the Console' },
    {
      key: 'Shift + Enter',
      command:
        'Force a multi-line entry. Note that DevTools should detect multi-line scenarios by default, so this shortcut is now usually unnecessary',
    },
    { key: 'Enter', command: 'Execute' },
    {
      key: 'Hold Alt then click Expand >',
      command: "Expand all sub-properties of an object that's been logged to the Console",
    },
  ];

  searchTab: Shortcut[] = [{ key: 'Ctrl + Shift + { or }', command: 'Expand/collapse all search results' }];
  recorderPanel: Shortcut[] = [
    { key: 'Ctrl + E', command: 'Start or stop recording' },
    { key: 'Ctrl + Enter', command: 'Replay recording' },
    { key: 'Ctrl + C', command: 'Copy recording or selected step' },
    { key: 'Ctrl + B', command: 'Toggle code view' },
  ];
}
