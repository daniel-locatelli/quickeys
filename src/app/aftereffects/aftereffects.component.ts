import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { afterEffects } from '../constants';

@Component({
    selector: 'app-aftereffects',
    imports: [CommonModule],
    templateUrl: './aftereffects.component.html',
    styleUrl: './aftereffects.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class AftereffectsComponent implements AfterViewInit, OnInit {
  constructor(private title: Title, private meta: Meta, private constants: afterEffects) {}

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
    { key: "Ctrl + Alt + '", command: 'Open keyboard shortcuts' },
    { key: 'Ctrl + A', command: 'Select all' },
    { key: 'F2 or Ctrl + Shift + A', command: 'Deselect all' },
    {
      key: 'Enter on the main keyboard / Return',
      command: 'Rename selected layer, composition, folder, effect, group, or mask',
    },
    { key: 'Enter on the numeric keypad', command: 'Open selected layer, composition, or footage item' },
    {
      key: 'Ctrl + Alt + Down Arrow or Ctrl + Alt + Up Arrow',
      command: 'Move selected layers, masks, effects, or render items down (back) or up (forward) in stacking order',
    },
    {
      key: 'Ctrl + Alt + Shift + Down Arrow or Ctrl + Alt + Shift + Up Arrow',
      command:
        'Move selected layers, masks, effects, or render items to bottom (back) or top (front) of stacking order',
    },
    {
      key: 'Shift + Down Arrow',
      command: 'Extend selection to next item in Project panel, Render Queue panel, or Effect Controls panel',
    },
    {
      key: 'Shift + Up Arrow',
      command: 'Extend selection to previous item in Project panel, Render Queue panel, or Effect Controls panel',
    },
    {
      key: 'Ctrl + D',
      command:
        'Duplicate selected layers, masks, effects, text selectors, animators, puppet meshes, shapes, render items, output modules, or compositions',
    },
    { key: 'Ctrl + Q', command: 'Quit' },
    { key: 'Ctrl + Z', command: 'Undo' },
    { key: 'Ctrl + Shift + Z', command: 'Redo' },
    { key: 'Ctrl + Alt + / (on numeric keypad)', command: 'Purge All Memory' },
    { key: 'Esc', command: 'Interrupt running a script' },
    {
      key: 'Ctrl + Alt + E',
      command: 'Display filename corresponding to the frame at the current time in the Info panel',
    },
  ];

  projects: Shortcut[] = [
    { key: 'Ctrl + Alt + N', command: 'New project' },
    { key: 'Ctrl + O', command: 'Open project' },
    { key: 'Ctrl + Alt + Shift + P', command: 'Open most recent project' },
    { key: 'Ctrl + Alt + Shift + N', command: 'New folder in Project panel' },
    { key: 'Ctrl + Alt + Shift + K', command: 'Open Project Settings dialog box' },
    { key: 'Ctrl + F', command: 'Find in Project panel' },
    {
      key: 'Alt-click the bit-depth button at bottom of the Project panel',
      command: 'Cycle through color bit depths for project',
    },
    { key: 'Select the bit-depth button at bottom of the Project panel', command: 'Open Project Settings dialog box' },
  ];

  preferences: Shortcut[] = [
    { key: 'Ctrl + Alt + ; (semicolon)', command: 'Open Preferences dialog box' },
    {
      key: 'Hold down Ctrl + Alt + Shift while starting After Effects',
      command: 'Restore default preferences settings',
    },
  ];

  panelsViewersWorkspacesWindows: Shortcut[] = [
    { key: 'Ctrl + 0', command: 'Open or close Project panel' },
    { key: 'Ctrl + Alt + 0', command: 'Open or close Render Queue panel' },
    { key: 'Ctrl + 1', command: 'Open or close Tools panel' },
    { key: 'Ctrl + 2', command: 'Open or close Info panel' },
    { key: 'Ctrl + 3', command: 'Open or close Preview panel' },
    { key: 'Ctrl + 4', command: 'Open or close Audio panel' },
    { key: 'Ctrl + 5', command: 'Open or close Effects & Presets panel' },
    { key: 'Ctrl + 6', command: 'Open or close Character panel' },
    { key: 'Ctrl + 7', command: 'Open or close Paragraph panel' },
    { key: 'Ctrl + 8', command: 'Open or close Paint panel' },
    { key: 'Ctrl + 9', command: 'Open or close Brushes panel' },
    { key: 'F3 or Ctrl + Shift + T', command: 'Open or close Effect Controls panel for selected layer' },
    { key: 'Ctrl + F11', command: 'Open Flowchart panel for project flowchart' },
    { key: 'Shift + F10, Shift + F11, or Shift + F12', command: 'Switch to workspace' },
    { key: 'Ctrl + W', command: 'Close active viewer or panel (closes content first)' },
    {
      key: 'Ctrl + Shift + W',
      command:
        'Close active panel or all viewers of type of active viewer (closes content first). For example, if a Timeline panel is active, this command closes all Timeline panels.',
    },
    {
      key: 'Ctrl + Alt + Shift + N',
      command: 'Split the frame containing the active viewer and create a viewer with opposite locked/unlocked state',
    },
    { key: '` (accent grave)', command: 'Maximize or restore panel under pointer' },
    {
      key: 'Ctrl + \\ (backslash)',
      command:
        'Resize application window or floating window to fit screen. (Press again to resize window so that contents fill the screen.)',
    },
    {
      key: 'Ctrl + Alt + \\ (backslash)',
      command:
        'Move application window or floating window to main monitor; resize window to fit screen. (Press again to resize window so that contents fill the screen.)',
    },
    {
      key: '\\ (backslash)',
      command: 'Toggle activation between Composition panel and Timeline panel for the current composition',
    },
    {
      key: 'Shift + , (comma) or Shift + . (period)',
      command: 'Cycle to previous or next item in the active viewer (for example, cycle through open compositions)',
    },
    {
      key: 'Alt + Shift + , (comma) or Alt + Shift + . (period)',
      command: 'Cycle to previous or next panel in the active frame (for example, cycle through open Timeline panels)',
    },
    {
      key: 'Select with the middle mouse button',
      command: 'Activate a view in a multi-view layout in the Composition panel without affecting layer selection',
    },
  ];

  activateTools: Shortcut[] = [
    { key: 'Alt-click the tool button in the Tools panel', command: 'Cycle through tools' },
    { key: 'V', command: 'Activate Selection tool' },
    { key: 'H', command: 'Activate Hand tool' },
    { key: 'Hold down the spacebar or the middle mouse button', command: 'Temporarily activate Hand tool' },
    { key: 'Z', command: 'Activate Zoom In tool' },
    { key: 'Alt (when Zoom In tool is active)', command: 'Activate Zoom Out tool' },
    { key: 'W', command: 'Activate Rotation tool' },
    { key: 'Alt + W', command: 'Activate Roto Brush tool' },
    { key: 'Alt + W', command: 'Activate Refine Edge tool' },
    {
      key: 'C',
      command:
        'Activate and cycle through Camera tools (Unified Camera, Orbit Camera, Track XY Camera, and Track Z Camera)',
    },
    { key: 'Y', command: 'Activate Pan Behind tool' },
    {
      key: 'Q',
      command: 'Activate and cycle through mask and shape tools (Rectangle, Rounded Rectangle, Ellipse, Polygon, Star)',
    },
    { key: 'Ctrl + T', command: 'Activate and cycle through Type tools (Horizontal and Vertical)' },
    {
      key: 'G',
      command:
        'Activate and cycle between the Pen and Mask Feather tools. (Note: You can turn off this setting in the Preferences dialog box.)',
    },
    { key: 'Ctrl', command: 'Temporarily activate Selection tool when a pen tool is selected' },
    {
      key: 'Ctrl + Alt',
      command:
        'Temporarily activate Pen tool when the Selection tool is selected and pointer is over a path (Add Vertex tool when pointer is over a segment; Convert Vertex tool when pointer is over a vertex)',
    },
    { key: 'Ctrl + B', command: 'Activate and cycle through Brush, Clone Stamp, and Eraser tools' },
    { key: 'Ctrl + P', command: 'Activate and cycle through Puppet tools' },
    { key: 'Alt (in shape layer)', command: 'Temporarily convert Selection tool to Shape Duplication tool' },
    { key: 'Ctrl (in shape layer)', command: 'Temporarily convert Selection tool to Direct Selection tool' },
  ];

  compositionsAndWorkArea: Shortcut[] = [
    { key: 'Ctrl + N', command: 'New composition' },
    { key: 'Ctrl + K', command: 'Open Composition Settings dialog box for selected composition' },
    { key: 'B or N', command: 'Set beginning or end of work area to current time' },
    {
      key: 'Ctrl + Alt + B',
      command:
        'Set work area to duration of selected layers or, if no layers are selected, set work area to composition duration',
    },
    { key: 'Tab', command: 'Open Composition Mini-Flowchart for active composition' },
    {
      key: 'Shift + Esc',
      command:
        'Activate the most recently active composition that is in the same composition hierarchy (network of nested compositions) as the currently active composition',
    },
    { key: 'Ctrl + Shift + X', command: 'Trim Composition to work area' },
    { key: 'Alt + \\', command: 'New Composition from selection' },
  ];

  timeNavigation: Shortcut[] = [
    { key: 'Alt + Shift + J', command: 'Go to specific time' },
    { key: 'Shift + Home or Shift + End', command: 'Go to beginning or end of work area' },
    {
      key: 'J or K',
      command: 'Go to previous or next visible item in time ruler (keyframe, layer marker, work area beginning or end)',
    },
    { key: 'Home or Ctrl + Alt + Left Arrow', command: 'Go to beginning of composition, layer, or footage item' },
    { key: 'End or Ctrl + Alt + Right Arrow', command: 'Go to end of composition, layer, or footage item' },
    { key: 'Page Down or Ctrl + Right Arrow', command: 'Go forward 1 frame' },
    { key: 'Shift + Page Down or Ctrl + Shift + Right Arrow', command: 'Go forward 10 frames' },
    { key: 'Page Up or Ctrl + Left Arrow', command: 'Go backward 1 frame' },
    { key: 'Shift + Page Up or Ctrl + Shift + Left Arrow', command: 'Go backward 10 frames' },
    { key: 'I', command: 'Go to layer In point' },
    { key: 'O', command: 'Go to layer Out point' },
    { key: 'Ctrl + Alt + Shift + Left Arrow', command: 'Go to previous In point or Out point' },
    { key: 'Ctrl + Alt + Shift + Right Arrow', command: 'Go to next In point or Out point' },
    { key: 'D', command: 'Scroll to current time in Timeline panel' },
  ];

  previews: Shortcut[] = [
    { key: 'Spacebar, 0 on the numeric keypad, Shift + 0 on the numeric keypad', command: 'Start or stop the preview' },
    {
      key: 'Alt-click Reset in the Preview panel',
      command: 'Reset preview settings to replicate RAM Preview and Standard Preview behaviors',
    },
    { key: '. (decimal point) on numeric keypad*', command: 'Preview only audio from the current time' },
    { key: 'Alt + . (decimal point) on numeric keypad*', command: 'Preview only audio in the work area' },
    {
      key: 'Drag or Alt-drag current-time indicator, depending on the Live Update setting.',
      command: 'Manually preview (scrub) video',
    },
    { key: 'Ctrl-drag current-time indicator', command: 'Manually preview (scrub) audio' },
    {
      key: 'Alt + 0 on numeric keypad*',
      command: 'Preview number of frames specified by Alternate Preview preference (defaults to 5)',
    },
    { key: '/ (on numeric keypad)', command: 'Toggle Mercury Transmit video preview' },
    { key: 'Shift + F5, Shift + F6, Shift + F7, or Shift + F8', command: 'Take snapshot' },
    { key: 'F5, F6, F7, or F8', command: 'Display snapshot in the active viewer' },
    { key: 'Ctrl + Shift + F5, Ctrl + Shift + F6, Ctrl + Shift + F7, or Ctrl + Shift + F8', command: 'Purge snapshot' },
    { key: 'Ctrl + Alt + 1', command: 'Fast Previews > Off' },
    { key: 'Ctrl + Alt + 2', command: 'Fast Previews > Adaptive Resolution' },
    { key: 'Ctrl + Alt + 3', command: 'Fast Previews > Draft' },
    { key: 'Ctrl + Alt + 4', command: 'Fast Previews > Fast Draft' },
    { key: 'Ctrl + Alt + 5', command: 'Fast Previews > Wireframe' },
  ];

  views: Shortcut[] = [
    { key: 'Shift + / (on numeric keypad)', command: 'Turn display color management on or off for an active view' },
    { key: 'Alt + 1, Alt + 2, Alt + 3, Alt + 4', command: 'Show red, green, blue, or alpha channel as grayscale' },
    { key: 'Alt + Shift + 1, Alt + Shift + 2, Alt + Shift + 3', command: 'Show colorized red, green, or blue channel' },
    { key: 'Alt + Shift + 4', command: 'Toggle showing straight RGB color' },
    {
      key: 'Alt + 5',
      command: 'Show the alpha boundary (outline between transparent and opaque regions) in the Layer panel',
    },
    { key: 'Alt + 6', command: 'Show alpha overlay (colored overlay on transparent regions) in the Layer panel' },
    { key: 'Alt + X', command: 'Show Refine Edge X-ray' },
    { key: 'Double-click the Hand tool', command: 'Center composition in the panel' },
    { key: '. (period) on the main keyboard', command: 'Zoom-in in Composition, Layer, or Footage panel' },
    { key: ', (comma)', command: 'Zoom-out in Composition, Layer, or Footage panel' },
    { key: '/ (on main keyboard)', command: 'Zoom to 100% in the Composition, Layer, or Footage panel' },
    { key: 'Shift + / (on main keyboard)', command: 'Zoom to fit in Composition, Layer, or Footage panel' },
    {
      key: 'Alt + / (on main keyboard)',
      command: 'Zoom up to 100% to fit in the Composition, Layer, or Footage panel',
    },
    {
      key: 'Ctrl + J, Ctrl + Shift + J, Ctrl + Alt + J',
      command: 'Set resolution to Full, Half, or Custom in the Composition panel',
    },
    { key: 'Ctrl + Alt + U', command: 'Open the View Options dialog box for the active Composition panel' },
    { key: '= (equal sign) on the main keyboard', command: 'Zoom in time' },
    { key: '- (hyphen) on the main keyboard', command: 'Zoom out time' },
    {
      key: '; (semicolon)',
      command:
        'Zoom in the Timeline panel to single-frame units (Press again to zoom out to show the entire composition duration.)',
    },
    {
      key: 'Shift + ; (semicolon)',
      command:
        'Zoom out in the Timeline panel to show the entire composition duration (Press again to zoom back into the duration specified by the Time Navigator.)',
    },
    { key: 'Caps Lock', command: 'Prevent images from being rendered for previews in viewer panels' },
    { key: "' (apostrophe)", command: 'Show or hide safe zones' },
    { key: "Ctrl + ' (apostrophe)", command: 'Show or hide the grid' },
    { key: "Alt + ' (apostrophe)", command: 'Show or hide the proportional grid' },
    { key: 'Ctrl + R', command: 'Show or hide rulers' },
    { key: 'Ctrl + ; (semicolon)', command: 'Show or hide guides' },
    { key: "Ctrl + Shift + ' (apostrophe)", command: 'Turn snapping to grid on or off' },
    { key: 'Ctrl + Shift + ; (semicolon)', command: 'Turn snapping to guides on or off' },
    { key: 'Ctrl + Alt + Shift + ; (semicolon)', command: 'Lock or unlock guides' },
    {
      key: 'Ctrl + Shift + H',
      command:
        'Show or hide layer controls (masks, motion paths, light and camera wireframes, effect control points, and layer handles)',
    },
  ];

  footage: Shortcut[] = [
    { key: 'Ctrl + I', command: 'Import one file or image sequence' },
    { key: 'Ctrl + Alt + I', command: 'Import multiple files or image sequences' },
    {
      key: 'Double-click the footage item in the Project panel',
      command: 'Open movie in an After Effects Footage panel',
    },
    { key: 'Ctrl + / (on main keyboard)', command: 'Add selected items to most recently activated composition' },
    {
      key: 'Ctrl + Alt + / (on main keyboard)',
      command: 'Replace selected source footage for selected layers with footage item selected in Project panel',
    },
    {
      key: 'Alt-drag footage item from the Project panel onto selected layer',
      command: 'Replace source for a selected layer',
    },
    { key: 'Ctrl + Backspace', command: 'Delete a footage item without a warning' },
    { key: 'Ctrl + Alt + G', command: 'Open Interpret Footage dialog box for selected footage item' },
    { key: 'Ctrl + Alt + C', command: 'Remember footage interpretation' },
    {
      key: 'Ctrl + E',
      command: 'Edit selected footage item in the application with which it’s associated (Edit Original)',
    },
    { key: 'Ctrl + H', command: 'Replace selected footage item' },
    { key: 'Ctrl + Alt + L', command: 'Reload selected footage items' },
    { key: 'Ctrl + Alt + P', command: 'Set proxy for selected footage item' },
  ];

  effectsAndAnimationPresets: Shortcut[] = [
    { key: 'Ctrl + Shift + E', command: 'Delete all effects from selected layers' },
    { key: 'Ctrl + Alt + Shift + E', command: 'Apply most recently applied effect to selected layers' },
    { key: 'Ctrl + Alt + Shift + F', command: 'Apply most recently applied animation preset to selected layers' },
  ];

  layers: Shortcut[] = [
    { key: 'Ctrl + Y', command: 'New solid layer' },
    { key: 'Ctrl + Alt + Shift + Y', command: 'New null layer' },
    { key: 'Ctrl + Alt + Y', command: 'New adjustment layer' },
    {
      key: '0-9 on numeric keypad*',
      command: 'Select layer (1-999) by its number (enter digits rapidly for two-digit and three-digit numbers)',
    },
    {
      key: 'Shift + 0-9 on numeric keypad*',
      command:
        'Toggle selection of layer (1-999) by its number (enter digits rapidly for two-digit and three-digit numbers)',
    },
    { key: 'Ctrl + Down Arrow', command: 'Select next layer in stacking order' },
    { key: 'Ctrl + Up Arrow', command: 'Select previous layer in stacking order' },
    { key: 'Ctrl + Shift + Down Arrow', command: 'Extend selection to next layer in stacking order' },
    { key: 'Ctrl + Shift + Up Arrow', command: 'Extend selection to previous layer in stacking order' },
    { key: 'Ctrl + Shift + A', command: 'Deselect all layers' },
    { key: 'X', command: 'Scroll topmost selected layer to top of Timeline panel' },
    { key: 'Shift + F4', command: 'Show or hide Parent column' },
    { key: 'F4', command: 'Show or hide Layer Switches and Modes columns' },
    { key: 'Alt + B', command: 'Setting the sampling method for selected layers (Best/Bilinear)' },
    { key: 'Alt + Shift + B', command: 'Setting the sampling method for selected layers (Best/Bicubic)' },
    { key: 'Alt-click solo switch', command: 'Turn off all other solo switches' },
    { key: 'Ctrl + Alt + Shift + V', command: 'Turn Video (eyeball) switch on or off for selected layers' },
    { key: 'Ctrl + Shift + V', command: 'Turn off Video switch for all video layers other than selected layers' },
    {
      key: 'Ctrl + Shift + Y',
      command: 'Open settings dialog box for selected solid, light, camera, null, or adjustment layer',
    },
    { key: 'Ctrl + Alt + V', command: 'Paste layers at current time' },
    { key: 'Ctrl + Shift + D', command: 'Split selected layers. (If no layers are selected, split all layers.)' },
    { key: 'Ctrl + Shift + C', command: 'Precompose selected layers' },
    { key: 'Ctrl + Shift + T', command: 'Open Effect Controls panel for selected layers' },
    {
      key: 'Double-click a layer',
      command: 'Open layer in Layer panel (opens source composition for precomposition layer in Composition panel)',
    },
    {
      key: 'Alt-double-click a layer',
      command: 'Open source of a layer in Footage panel (opens precomposition layer in Layer panel)',
    },
    { key: 'Ctrl + Alt + R', command: 'Reverse selected layers in time' },
    { key: 'Ctrl + Alt + T', command: 'Enable time remapping for selected layers' },
    {
      key: '[ (left bracket) or ] (right bracket)',
      command: 'Move selected layers so that their In point or Out point is at the current time',
    },
    {
      key: 'Alt + [ (left bracket) or Alt + ] (right bracket)',
      command: 'Trim In point or Out point of selected layers to the current time',
    },
    { key: 'Alt-click stopwatch', command: 'Add or remove expression for a property' },
    {
      key: 'Double-click effect selection in the Effects & Presets panel',
      command: 'Add an effect (or multiple selected effects) to selected layers',
    },
    {
      key: 'Ctrl + Shift + , (comma) or Ctrl + Alt + Shift + , (comma)',
      command: 'Set In point or Out point by time-stretching',
    },
    {
      key: 'Alt + Home',
      command: 'Move selected layers so that their In point is at the beginning of the composition',
    },
    { key: 'Alt + End', command: 'Move selected layers so that their Out point is at the end of the composition' },
    { key: 'Ctrl + L', command: 'Lock selected layers' },
    { key: 'Ctrl + Shift + L', command: 'Unlock all layers' },
    {
      key: 'Ctrl + U, Ctrl + Shift + U, or Ctrl + Alt + Shift + U',
      command: 'Set Quality to Best, Draft, or Wireframe for selected layers',
    },
    {
      key: 'Shift + - (hyphen) or Shift + = (equal sign) on the main keyboard',
      command: 'Cycle forward or backward through blending modes for selected layers',
    },
  ];

  timelinePanel: Shortcut[] = [
    { key: 'Ctrl + F', command: 'Find in Timeline panel' },
    { key: 'Ctrl + ` (accent grave)', command: 'Toggle expansion of selected layers to show all properties' },
    {
      key: 'Ctrl-click the triangle to the left of the property group name',
      command: 'Toggle expansion of property group and all child property groups to show all properties',
    },
    { key: 'A', command: 'Show only Anchor Point property (for lights and cameras, Point Of Interest)' },
    { key: 'L', command: 'Show only Audio Levels property' },
    { key: 'F', command: 'Show only Mask Feather property' },
    { key: 'M', command: 'Show only Mask Path property' },
    { key: 'TT', command: 'Show only Mask Opacity property' },
    { key: 'T', command: 'Show only Opacity property (for lights, Intensity)' },
    { key: 'P', command: 'Show only Position property' },
    { key: 'R', command: 'Show only Rotation and Orientation properties' },
    { key: 'S', command: 'Show only Scale property' },
    { key: 'RR', command: 'Show only Time Remap property' },
    { key: 'FF', command: 'Show only instances of missing effects' },
    { key: 'E', command: 'Show only Effects property group' },
    { key: 'MM', command: 'Show only mask property groups' },
    { key: 'AA', command: 'Show only Material Options property group' },
    { key: 'EE', command: 'Show only expressions' },
    { key: 'U', command: 'Show properties with keyframes' },
    { key: 'UU', command: 'Show only modified properties' },
    { key: 'PP', command: 'Show only paint strokes, Roto Brush strokes, and Puppet pins' },
    { key: 'LL', command: 'Show only audio waveform' },
    { key: 'SS', command: 'Show only selected properties and groups' },
    { key: 'Alt + Shift-click property or group name', command: 'Hide property or group' },
    { key: 'Shift + property or group shortcut', command: 'Add or remove property or group from set that is shown' },
    { key: 'Alt + Shift + property shortcut', command: 'Add or remove keyframe at current time' },
  ];

  effectControlsPanel: Shortcut[] = [
    { key: 'Ctrl + ` (accent grave)', command: 'Toggle expansion of selected effects to show all properties' },
    {
      key: 'Ctrl-click the triangle to the left of the property group name',
      command: 'Toggle expansion of property group and all child property groups to show all properties',
    },
  ];

  modifyingLayerProperties: Shortcut[] = [
    { key: 'Drag property value', command: 'Modify property value by default increments' },
    { key: 'Shift-drag property value', command: 'Modify property value by 10x default increments' },
    { key: 'Ctrl-drag property value', command: 'Modify property value by 1/10 default increments' },
    { key: 'Ctrl + Alt + O', command: 'Open Auto-Orientation dialog box for selected layers' },
    { key: 'Ctrl + Shift + O', command: 'Open Opacity dialog box for selected layers' },
    { key: 'Ctrl + Shift + R', command: 'Open Rotation dialog box for selected layers' },
    { key: 'Ctrl + Shift + P', command: 'Open Position dialog box for selected layers' },
    {
      key: 'Ctrl + Home',
      command:
        'Center-selected layers in view (modifies Position property to place anchor points of selected layers in center of current view)',
    },
    { key: 'Ctrl + Alt + Home', command: 'Center anchor point in the visible content' },
    { key: 'Arrow key', command: 'Move selected layers 1 pixel at current magnification (Position)' },
    { key: 'Shift + Arrow key', command: 'Move selected layers 10 pixels at current magnification (Position)' },
    { key: 'Alt + Page Up or Alt + Page Down', command: 'Move selected layers 1 frame earlier or later' },
    {
      key: 'Alt + Shift + Page Up or Alt + Shift + Page Down',
      command: 'Move selected layers 10 frames earlier or later',
    },
    {
      key: '+ (plus) or - (minus) on the numeric keypad',
      command: 'Increase or decrease Rotation (Z Rotation) of selected layers by 1°',
    },
    {
      key: 'Shift + + (plus) or Shift + - (minus) on numeric keypad',
      command: 'Increase or decrease Rotation (Z Rotation) of selected layers by 10°',
    },
    {
      key: 'Ctrl + Alt + + (plus) or Ctrl + Alt + - (minus) on numeric keypad',
      command: 'Increase or decrease Opacity (or Intensity for light layers) of selected layers by 1%',
    },
    {
      key: 'Ctrl + Alt + Shift + + (plus) or Ctrl + Alt + Shift + - (minus) on numeric keypad',
      command: 'Increase or decrease Opacity (or Intensity for light layers) of selected layers by 10%',
    },
    {
      key: 'Ctrl + + (plus) or Alt + + (plus) on the numeric keypad',
      command: 'Increase Scale of selected layers by 1%',
    },
    {
      key: 'Ctrl + - (minus) or Alt + - (minus) on numeric keypad',
      command: 'Decrease Scale of selected layers by 1%',
    },
    {
      key: 'Ctrl + Shift + + (plus) or Alt + Shift + + (plus) on the numeric keypad',
      command: 'Increase Scale of selected layers by 10%',
    },
    {
      key: 'Ctrl + Shift + - (minus) or Alt + Shift + - (minus) on numeric keypad',
      command: 'Decrease Scale of selected layers by 10%',
    },
    { key: 'Shift-drag with the Rotation tool', command: 'Modify Rotation or Orientation in 45° increments' },
    {
      key: 'Shift-drag layer handle with the Selection tool',
      command: 'Modify Scale, constrained to footage frame aspect ratio',
    },
    { key: 'Double-click the Rotation tool', command: 'Reset Rotation to 0°' },
    { key: 'Double-click the Selection tool', command: 'Reset Scale to 100%' },
    { key: 'Ctrl + Alt + F', command: 'Scale and reposition selected layers to fit composition' },
    {
      key: 'Ctrl + Alt + Shift + H',
      command:
        'Scale and reposition selected layers to fit composition width, preserving image aspect ratio for each layer',
    },
    {
      key: 'Ctrl + Alt + Shift + G',
      command:
        'Scale and reposition selected layers to fit composition height, preserving image aspect ratio for each layer',
    },
  ];

  threeDLayers: Shortcut[] = [
    { key: 'F10', command: 'Switch to 3D view 1 (defaults to Front)' },
    { key: 'F11', command: 'Switch to 3D view 2 (defaults to Custom View 1)' },
    { key: 'F12', command: 'Switch to 3D view 3 (defaults to Active Camera)' },
    { key: 'Esc', command: 'Return to previous view' },
    { key: 'Ctrl + Alt + Shift + L', command: 'New light' },
    { key: '1', command: 'Switch to Orbit camera control' },
    { key: '2', command: 'Switch to Pan camera control' },
    { key: '3', command: 'Switch to Dolly camera control' },
    { key: 'Ctrl + Alt + Shift + C', command: 'New camera' },
    { key: 'V', command: 'Switch to Universal gizmo' },
    { key: '4', command: 'Switch to Position gizmo' },
    { key: '5', command: 'Switch to Scale gizmo' },
    { key: '6', command: 'Switch to Rotation gizmo' },
    {
      key: 'Ctrl + Alt + Shift + \\',
      command: 'Move the camera and its point of interest to look at selected 3D layers',
    },
    {
      key: 'F',
      command: 'With a camera tool selected, move the camera and its point of interest to look at selected 3D layers',
    },
    {
      key: 'Ctrl + Shift + F',
      command: 'With a camera tool selected, move the camera and its point of interest to look at all 3D layers',
    },
    { key: 'Alt + Shift + C', command: 'Turn Casts Shadows property on or off for selected 3D layers' },
  ];

  keyframesAndGraphEditor: Shortcut[] = [
    { key: 'Shift + F3', command: 'Toggle between Graph Editor and layer bar modes' },
    { key: 'Click property name', command: 'Select all keyframes for a property' },
    { key: 'Ctrl + Alt + A', command: 'Select all visible keyframes and properties' },
    { key: 'Shift + F2 or Ctrl + Alt + Shift + A', command: 'Deselect all keyframes, properties, and property groups' },
    { key: 'Alt + Right Arrow or Alt + Left Arrow', command: 'Move keyframe 1 frame later or earlier' },
    {
      key: 'Alt + Shift + Right Arrow or Alt + Shift + Left Arrow',
      command: 'Move keyframe 10 frames later or earlier',
    },
    { key: 'Ctrl + Alt + K', command: 'Set interpolation for selected keyframes (layer bar mode)' },
    { key: 'Ctrl + Alt + H', command: 'Set keyframe interpolation method to hold or Auto Bezier' },
    { key: 'Ctrl-click in layer bar mode', command: 'Set keyframe interpolation method to linear or Auto Bezier' },
    { key: 'Ctrl + Alt-click in layer bar mode', command: 'Set keyframe interpolation method to linear or hold' },
    { key: 'F9', command: 'Easy ease selected keyframes' },
    { key: 'Shift + F9', command: 'Easy ease selected keyframes in' },
    { key: 'Ctrl + Shift + F9', command: 'Easy ease selected keyframes out' },
    { key: 'Ctrl + Shift + K', command: 'Set velocity for selected keyframes' },
    { key: 'Alt + Shift + property shortcut', command: 'Add or remove keyframe at current time' },
  ];

  textShortcuts: Shortcut[] = [
    { key: 'Ctrl + Alt + Shift + T', command: 'New text layer' },
    {
      key: 'Ctrl + Shift + L, Ctrl + Shift + C, or Ctrl + Shift + R',
      command: 'Align selected horizontal text left, center, or right',
    },
    {
      key: 'Ctrl + Shift + L, Ctrl + Shift + C, or Ctrl + Shift + R',
      command: 'Align selected vertical text top, center, or bottom',
    },
    {
      key: 'Shift + Right Arrow or Shift + Left Arrow',
      command: 'Extend or reduce selection by one character to the right or left in horizontal text',
    },
    {
      key: 'Ctrl + Shift + Right Arrow or Ctrl + Shift + Left Arrow',
      command: 'Extend or reduce selection by one word to the right or left in horizontal text',
    },
    {
      key: 'Shift + Up Arrow or Shift + Down Arrow',
      command: 'Extend or reduce selection by one line up or down in horizontal text',
    },
    {
      key: 'Shift + Right Arrow or Shift + Left Arrow',
      command: 'Extend or reduce selection by one line to the right or left in vertical text',
    },
    {
      key: 'Ctrl + Shift + Up Arrow or Ctrl + Shift + Down Arrow',
      command: 'Extend or reduce selection by one word up or down in vertical text',
    },
    {
      key: 'Shift + Up Arrow or Shift + Down Arrow',
      command: 'Extend or reduce selection by one character up or down in vertical text',
    },
    {
      key: 'Shift + Home or Shift + End',
      command: 'Select text from the insertion point to the beginning or end of the line',
    },
    { key: 'Home or End', command: 'Move insertion point to the beginning or end of the line' },
    { key: 'Double-click text layer', command: 'Select all text on a layer' },
    {
      key: 'Ctrl + Shift + Home or Ctrl + Shift + End',
      command: 'Select text from the insertion point to the beginning or end of the text frame',
    },
    { key: 'Shift-click', command: 'To mouse-click point, select text from the insertion point' },
    {
      key: 'Left Arrow or Right Arrow; Up Arrow or Down Arrow; Ctrl + Left Arrow or Ctrl + Right Arrow; or Ctrl + Up Arrow or Ctrl + Down Arrow',
      command:
        'In horizontal text, move the insertion point one character left or right; one line up or down; one word left or right; or one paragraph up or down',
    },
    {
      key: 'Up Arrow or Down Arrow; Left Arrow or Right Arrow; Ctrl + Up Arrow or Ctrl + Down Arrow; or Ctrl + Left Arrow or Ctrl + Right Arrow',
      command:
        'In vertical text, move the insertion point one character up or down; one left or right; one word up or down; or one paragraph left or right',
    },
    {
      key: 'Double-click, triple-click, quadruple-click, or quintuple-click with the Type tool',
      command: 'Select word, line, paragraph, or entire text frame',
    },
    { key: 'Ctrl + Shift + K', command: 'Turn All Caps on or off for selected text' },
    { key: 'Ctrl + Alt + Shift + K', command: 'Turn Small Caps on or off for selected text' },
    { key: 'Ctrl + Shift + = (equal sign)', command: 'Turn Superscript on or off for selected text' },
    { key: 'Ctrl + Alt + Shift + = (equal sign)', command: 'Turn Subscript on or off for selected text' },
    { key: 'Ctrl + Shift + X', command: 'Set horizontal scale to 100% for selected text' },
    { key: 'Ctrl + Alt + Shift + X', command: 'Set vertical scale to 100% for selected text' },
    { key: 'Ctrl + Alt + Shift + A', command: 'Auto leading for selected text' },
    { key: 'Ctrl + Shift + Q', command: 'Reset tracking to 0 for selected text' },
    { key: 'Ctrl + Shift + J', command: 'Justify paragraph; left align last line' },
    { key: 'Ctrl + Alt + Shift + J', command: 'Justify paragraph; right align last line' },
    { key: 'Ctrl + Shift + F', command: 'Justify paragraph; force last line' },
    {
      key: 'Ctrl + Shift + , (comma) or Ctrl + Shift + . (period)',
      command: 'Decrease or increase font size of selected text by 2 units',
    },
    {
      key: 'Ctrl + Alt + Shift + , (comma) or Ctrl + Alt + Shift + . (period)',
      command: 'Decrease or increase font size of selected text by 10 units',
    },
    { key: 'Alt + Down Arrow or Alt + Up Arrow', command: 'Increase or decrease leading by 2 units' },
    { key: 'Ctrl + Alt + Down Arrow or Ctrl + Alt + Up Arrow', command: 'Increase or decrease leading by 10 units' },
    {
      key: 'Alt + Shift + Down Arrow or Alt + Shift + Up Arrow',
      command: 'Decrease or increase baseline shift by 2 units',
    },
    {
      key: 'Ctrl + Alt + Shift + Down Arrow or Ctrl + Alt + Shift + Up Arrow',
      command: 'Decrease or increase baseline shift by 10 units',
    },
    {
      key: 'Alt + Left Arrow or Alt + Right Arrow',
      command: 'Decrease or increase kerning or tracking 20 units (20/1000 ems)',
    },
    {
      key: 'Ctrl + Alt + Left Arrow or Ctrl + Alt + Right Arrow',
      command: 'Decrease or increase kerning or tracking 100 units (100/1000 ems)',
    },
    { key: 'Ctrl + Alt + Shift + T', command: 'Toggle paragraph composer' },
  ];

  masksShortcuts: Shortcut[] = [
    { key: 'Ctrl + Shift + N', command: 'New mask' },
    { key: 'Alt-click mask', command: 'Select all points in a mask' },
    { key: 'Alt + ` (accent grave) or Alt + Shift + ` (accent grave)', command: 'Select the next or previous mask' },
    {
      key: 'Double-click the mask with the Selection tool or select the mask in the Timeline panel and press Ctrl + T',
      command: 'Enter free-transform mask editing mode',
    },
    { key: 'Esc', command: 'Exit free-transform mask editing mode' },
    { key: 'Ctrl-drag', command: 'Scale around the center point in Free Transform mode' },
    { key: 'Arrow key', command: 'Move selected path points 1 pixel at the current magnification' },
    { key: 'Shift + Arrow key', command: 'Move selected path points 10 pixels at the current magnification' },
    { key: 'Ctrl + Alt-click vertex', command: 'Toggle between smooth and corner points' },
    { key: 'Ctrl + Alt-drag vertex', command: 'Redraw Bezier handles' },
    { key: 'Ctrl + Shift + I', command: 'Invert selected mask' },
    { key: 'Ctrl + Shift + F', command: 'Open the Mask Feather dialog box for selected mask' },
    { key: 'Ctrl + Shift + M', command: 'Open the Mask Shape dialog box for selected mask' },
    { key: 'S', command: 'Subtract mode' },
    { key: 'D', command: 'Darken mode' },
    { key: 'F', command: 'Difference mode' },
    { key: 'A', command: 'Add mode' },
    { key: 'I', command: 'Intersect mode' },
    { key: 'N', command: 'None' },
  ];

  paintToolsShortcuts: Shortcut[] = [
    { key: 'X', command: 'Swap paint background color and foreground colors' },
    { key: 'D', command: 'Set paint foreground color to black and background color to white' },
    { key: 'Alt-click', command: 'Set foreground color to the color currently under any paint tool pointer' },
    {
      key: 'Ctrl + Alt-click',
      command: 'Set foreground color to the average color of a 4-pixel x 4-pixel area under any paint tool pointer',
    },
    { key: 'Ctrl-drag', command: 'Set brush size for a paint tool' },
    { key: 'Ctrl-drag, then release Ctrl while dragging', command: 'Set brush hardness for a paint tool' },
    { key: 'Hold Shift while beginning the stroke', command: 'Join current paint stroke to the previous stroke' },
    { key: 'Alt-click', command: 'Set starting sample point to point currently under Clone Stamp tool pointer' },
    { key: 'Ctrl + Shift', command: 'Momentarily activate Eraser tool with Last Stroke Only option' },
    {
      key: 'Alt + Shift-drag with the Clone Stamp tool',
      command:
        'Show and move overlay (change Offset value of aligned Clone Stamp tool or change Source Position value of unaligned Clone Stamp tool)',
    },
    { key: '3, 4, 5, 6, or 7 on the main keyboard', command: 'Activate a specific Clone Stamp tool preset' },
    { key: 'Alt-click the button for the preset', command: 'Duplicate a Clone Stamp tool preset in Paint panel' },
    { key: 'Digit on numeric keypad (for example, 9=90%, 1=10%)*', command: 'Set opacity for a paint tool' },
    { key: '. (decimal) on numeric keypad*', command: 'Set opacity for a paint tool to 100%' },
    { key: 'Shift + a digit on the numeric keypad (for example, 9=90%, 1=10%)*', command: 'Set flow for a paint tool' },
    { key: 'Shift + . (decimal) on numeric keypad*', command: 'Set flow for a paint tool to 100%' },
    {
      key: 'Ctrl + Page Up or Ctrl + Page Down (or 1 or 2 on the main keyboard)',
      command: 'Move earlier or later by number of frames specified for stroke Duration',
    },
  ];

  shapeLayersShortcuts: Shortcut[] = [
    { key: 'Ctrl + G', command: 'Group selected shapes' },
    { key: 'Ctrl + Shift + G', command: 'Ungroup selected shapes' },
    {
      key: 'Select the Path property in the Timeline panel and press Ctrl + T',
      command: 'Enter free-transform path editing mode',
    },
    { key: 'Page Up when dragging to create a shape', command: 'Increase star inner roundness' },
    { key: 'Page Down when dragging to create a shape', command: 'Decrease star inner roundness' },
    {
      key: 'Up Arrow when dragging to create a shape',
      command: 'Increase number of points for star or polygon; increase roundness for rounded rectangle',
    },
    {
      key: 'Down Arrow when dragging to create a shape',
      command: 'Decrease number of points for star or polygon; decrease roundness for rounded rectangle',
    },
    { key: 'Hold the Spacebar when dragging to create a shape', command: 'Reposition shape during creation' },
    {
      key: 'Left Arrow when dragging to create a shape',
      command: 'Set rounded rectangle roundness to 0 (sharp corners); decrease polygon and star outer roundness',
    },
    {
      key: 'Right Arrow when dragging to create a shape',
      command: 'Set rounded rectangle roundness to maximum; increase polygon and star outer roundness',
    },
    {
      key: 'Shift when dragging to create a shape',
      command:
        'Constrain rectangles to squares; constrain ellipses to circles; constrain polygons and stars to zero rotation',
    },
    { key: 'Ctrl when dragging to create a shape', command: 'Change outer radius of star' },
  ];

  markersShortcuts: Shortcut[] = [
    {
      key: '* (multiply) on numeric keypad',
      command: 'Set marker at current time (works during preview and audio-only preview)',
    },
    {
      key: 'Alt + * (multiply) on the numeric keypad',
      command: 'Set marker at current time and open marker dialog box',
    },
    {
      key: 'Shift + 0-9 on the main keyboard',
      command: 'Set and number a composition marker (0-9) at the current time',
    },
    { key: '0-9 on main keyboard', command: 'Go to a composition marker (0-9)' },
    {
      key: 'Alt-click the markers or keyframes',
      command: 'Display the duration between two layer markers or keyframes in the Info panel',
    },
    { key: 'Ctrl-click marker', command: 'Remove marker' },
  ];

  motionTrackingShortcuts: Shortcut[] = [
    {
      key: 'Arrow key',
      command: 'Move feature region, search region, and attach point 1 pixel at current magnification',
    },
    {
      key: 'Shift + Arrow key',
      command: 'Move feature region, search region, and attach point 10 pixels at current magnification',
    },
    { key: 'Alt + Arrow key', command: 'Move feature region and search region 1 pixel at current magnification' },
    {
      key: 'Alt + Shift + Arrow key',
      command: 'Move feature region and search region 10 pixels at current magnification',
    },
  ];

  savingExportingRenderingShortcuts: Shortcut[] = [
    { key: 'Ctrl + S', command: 'Save project' },
    { key: 'Ctrl + Alt + Shift + S', command: 'Increment and save project' },
    { key: 'Ctrl + Shift + S', command: 'Save As' },
    { key: 'Ctrl + Shift + / (on main keyboard)', command: 'Add active composition or selected items to render queue' },
    { key: 'Ctrl + Alt + S', command: 'Add current frame to render queue' },
    { key: 'Ctrl + Shift + D', command: 'Duplicate render item with same output filename as original' },
    { key: 'Ctrl + Alt + M', command: 'Add a composition to the Adobe Media Encoder encoding queue' },
  ];
}
