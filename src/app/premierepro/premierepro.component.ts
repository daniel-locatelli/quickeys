
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { premierePro } from '../constants';

@Component({
    selector: 'app-premierepro',
    imports: [],
    templateUrl: './premierepro.component.html',
    styleUrl: './premierepro.component.css',
    host: {
        class: 'shortcuts',
    }
})
export class PremiereproComponent implements AfterViewInit, OnInit {

  constructor (private title: Title, private meta: Meta, private constants: premierePro){}

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

  file: Shortcut[] = [
    { key: 'Ctrl + Alt + N', command: 'Project...' },
    { key: 'Ctrl + N', command: 'Sequence...' },
    { key: 'Ctrl + /', command: 'Bin' },
    { key: 'Ctrl + O', command: 'Open Project...' },
    { key: 'Ctrl + Shift + W', command: 'Close Project' },
    { key: 'Ctrl + W', command: 'Close' },
    { key: 'Ctrl + S', command: 'Save' },
    { key: 'Ctrl + Shift + S', command: 'Save As...' },
    { key: 'Ctrl + Alt + S', command: 'Save a Copy...' },
    { key: 'F5', command: 'Capture...' },
    { key: 'F6', command: 'Batch Capture...' },
    { key: 'Ctrl + Alt + I', command: 'Import from Media Browser' },
    { key: 'Ctrl + I', command: 'Import...' },
    { key: 'Ctrl + M', command: 'Export Media' },
    { key: 'Ctrl + Shift + H', command: 'Get Properties for Selection...' },
    { key: 'Ctrl + Q', command: 'Exit' },
  ];

  edit: Shortcut[] = [
    { key: 'Ctrl + Z', command: 'Undo' },
    { key: 'Ctrl + Shift + Z', command: 'Redo' },
    { key: 'Ctrl + X', command: 'Cut' },
    { key: 'Ctrl + C', command: 'Copy' },
    { key: 'Ctrl + V', command: 'Paste' },
    { key: 'Ctrl + Shift + V', command: 'Paste Insert' },
    { key: 'Ctrl + Alt + V', command: 'Paste Attributes' },
    { key: 'Delete', command: 'Clear' },
    { key: 'Shift + Delete', command: 'Ripple Delete' },
    { key: 'Ctrl + Shift + /', command: 'Duplicate' },
    { key: 'Ctrl + A', command: 'Select All' },
    { key: 'Ctrl + Shift + A', command: 'Deselect All' },
    { key: 'Ctrl + F', command: 'Find...' },
    { key: 'Ctrl + E', command: 'Edit Original' },
    { key: 'Ctrl + Alt + K', command: 'Keyboard Shortcuts' },
  ];

  clip: Shortcut[] = [
    { key: 'Ctrl + U', command: 'Make Subclip...' },
    { key: 'Shift + G', command: 'Audio Channels...' },
    { key: 'G', command: 'Audio Gain' },
    { key: 'Ctrl + R', command: 'Speed/Duration...' },
    { key: ',', command: 'Insert' },
    { key: '.', command: 'Overwrite' },
    { key: 'Shift + E', command: 'Enable' },
    { key: 'Ctrl + L', command: 'Link' },
    { key: 'Ctrl + G', command: 'Group' },
    { key: 'Ctrl + Shift + G', command: 'Ungroup' },
  ];

  sequence: Shortcut[] = [
    { key: 'Enter', command: 'Render Effects in Work Area' },
    { key: 'F', command: 'Match Frame' },
    { key: 'Shift + R', command: 'Reverse Match Frame' },
    { key: 'Ctrl + K', command: 'Add Edit' },
    { key: 'Ctrl + Shift + K', command: 'Add Edit to All Tracks' },
    { key: 'Shift + T', command: 'Trim Edit' },
    { key: 'E', command: 'Extend Selected Edit to Playhead' },
    { key: 'Ctrl + D', command: 'Apply Video Transition' },
    { key: 'Ctrl + Shift + D', command: 'Apply Audio Transition' },
    { key: 'Shift + D', command: 'Apply Default Transitions to Selection' },
    { key: ';', command: 'Lift' },
    { key: "'", command: 'Extract' },
    { key: '=', command: 'Zoom In' },
    { key: '-', command: 'Zoom Out' },
    { key: 'Shift + ;', command: 'Next in Sequence' },
    { key: 'Ctrl + Shift + ;', command: 'Previous in Sequence' },
    { key: 'S', command: 'Snap in Timeline' },
    { key: 'Shift + U', command: 'Make Subsequence' },
    { key: 'Ctrl + Alt + A', command: 'Add new caption track' },
    { key: 'Ctrl + Alt + C', command: 'Add caption at playhead' },
    { key: 'Ctrl + Alt + Down', command: 'Go to next caption segment' },
    { key: 'Ctrl + Alt + Up', command: 'Go to previous caption segment' },
  ];

  markers: Shortcut[] = [
    { key: 'I', command: 'Mark In' },
    { key: 'O', command: 'Mark Out' },
    { key: 'X', command: 'Mark Clip' },
    { key: '/', command: 'Mark Selection' },
    { key: 'Shift + I', command: 'Go to In' },
    { key: 'Shift + O', command: 'Go to Out' },
    { key: 'Ctrl + Shift + I', command: 'Clear In' },
    { key: 'Ctrl + Shift + O', command: 'Clear Out' },
    { key: 'Ctrl + Shift + X', command: 'Clear In and Out' },
    { key: 'M', command: 'Add Marker' },
    { key: 'Shift + M', command: 'Go to Next Marker' },
    { key: 'Ctrl + Shift + M', command: 'Go to Previous Marker' },
    { key: 'Ctrl + Alt + M', command: 'Clear Selected Marker' },
    { key: 'Ctrl + Alt + Shift + M', command: 'Clear All Markers' },
  ];

  graphicsAndTitles: Shortcut[] = [
    { key: 'Ctrl + T', command: 'New Text Layer' },
    { key: 'Ctrl + Alt + R', command: 'New Rectangle Layer' },
    { key: 'Ctrl + Alt + E', command: 'New Ellipse Layer' },
    { key: 'Ctrl + Shift + ]', command: 'Bring to Front' },
    { key: 'Ctrl + ]', command: 'Bring Forward' },
    { key: 'Ctrl + [', command: 'Send Backward' },
    { key: 'Ctrl + Shift + [', command: 'Send to Back' },
    { key: 'Ctrl + Alt + ]', command: 'Select Next Layer' },
  ];

  window: Shortcut[] = [
    { key: 'Alt + Shift + 0', command: 'Reset to Saved Layout' },
    { key: 'Shift + 9', command: 'Audio Clip Mixer' },
    { key: 'Shift + 6', command: 'Audio Track Mixer' },
    { key: 'Shift + 5', command: 'Effect Controls' },
    { key: 'Shift + 7', command: 'Effects' },
    { key: 'Shift + 8', command: 'Media Browser' },
    { key: 'Shift + 4', command: 'Program Monitor' },
    { key: 'Shift + 1', command: 'Projects' },
    { key: 'Shift + 2', command: 'Source Monitor' },
    { key: 'Shift + 3', command: 'Timelines' },
  ];

  audioTrackMixerPanel: Shortcut[] = [
    { key: 'Ctrl + Alt + T', command: 'Show/Hide Tracks' },
    { key: 'Ctrl + L', command: 'Loop' },
    { key: 'Ctrl + Shift + I', command: 'Meter Input(s) Only' },
  ];

  capturePanel: Shortcut[] = [
    { key: 'V', command: 'Record Video' },
    { key: 'A', command: 'Record Audio' },
    { key: 'E', command: 'Eject' },
    { key: 'F', command: 'Fast Forward' },
    { key: 'Q', command: 'Go to In point' },
    { key: 'W', command: 'Go to Out point' },
    { key: 'G', command: 'Record' },
    { key: 'R', command: 'Rewind' },
    { key: 'Left', command: 'Step Back' },
    { key: 'Right', command: 'Step Forward' },
    { key: 'S', command: 'Stop' },
  ];

  effectControlsPanel: Shortcut[] = [
    { key: 'Backspace', command: 'Remove Selected Effect' },
    { key: 'Ctrl + L', command: 'Loop During Audio-Only Playback' },
  ];

  effectsPanel: Shortcut[] = [
    { key: 'Ctrl + /', command: 'New Custom Bin' },
    { key: 'Backspace', command: 'Delete Custom Item' },
  ];

  essentialGraphicsPanel: Shortcut[] = [
    { key: 'Ctrl + T', command: 'New Text Layer' },
    { key: 'Ctrl + Alt + R', command: 'Rectangle' },
    { key: 'Ctrl + Alt + E', command: 'Ellipse' },
    { key: 'Ctrl + Shift + ]', command: 'Bring to Front' },
    { key: 'Ctrl + ]', command: 'Bring Forward' },
    { key: 'Ctrl + [', command: 'Send Backward' },
    { key: 'Ctrl + Shift + [', command: 'Send to Back' },
    { key: 'Ctrl + Alt + ]', command: 'Select Next Layer' },
    { key: 'Ctrl + Alt + [', command: 'Select Previous Layer' },
    { key: 'Backspace', command: 'Clear Selection' },
    { key: 'Alt + Up', command: 'Increase Leading by One Unit' },
    { key: 'Alt + Down', command: 'Decrease Leading by One Unit' },
    { key: 'Alt + Shift + Up', command: 'Increase Leading by Five Units' },
    { key: 'Alt + Shift + Down', command: 'Decrease Leading by Five Units' },
    { key: 'Ctrl + Alt + Right', command: 'Increase Font Size by One Unit' },
    { key: 'Ctrl + Alt + Left', command: 'Decrease Font Size by One Unit' },
    { key: 'Ctrl + Alt + Shift + Right', command: 'Increase Font Size by Five Units' },
    { key: 'Ctrl + Alt + Shift + Left', command: 'Decrease Font Size by Five Units' },
  ];

  historyPanel: Shortcut[] = [
    { key: 'Left', command: 'Step Backward' },
    { key: 'Right', command: 'Step Forward' },
    { key: 'Backspace', command: 'Delete' },
  ];

  mediaBrowserPanel: Shortcut[] = [
    { key: 'Shift + O', command: 'Open in Source Monitor' },
    { key: 'Shift + Left', command: 'Select Directory List' },
    { key: 'Shift + Right', command: 'Select Media List' },
  ];

  metadataPanel: Shortcut[] = [
    { key: 'Ctrl + L', command: 'Loop' },
    { key: 'Space', command: 'Play' },
  ];

  multiCamera: Shortcut[] = [
    { key: 'Down', command: 'Go to Next Edit Point' },
    { key: 'Shift + Down', command: 'Go to Next Edit Point on Any Track' },
    { key: 'Up', command: 'Go to Previous Edit Point' },
    { key: 'Shift + Up', command: 'Go to Previous Edit Point on Any Track' },
    { key: 'Shift + End', command: 'Go to Selected Clip End' },
    { key: 'Shift + Home', command: 'Go to Selected Clip Start' },
    { key: 'End', command: 'Go to Sequence-Clip End' },
    { key: 'Home', command: 'Go to Sequence-Clip Start' },
    { key: ']', command: 'Increase Clip Volume' },
    { key: 'Shift + ]', command: 'Increase Clip Volume Many' },
    { key: 'Shift + `', command: 'Maximize or Restore Active Frame' },
    { key: '`', command: 'Maximize or Restore Frame Under Cursor' },
    { key: 'Shift + -', command: 'Minimize All Tracks' },
    { key: 'Shift + K', command: 'Play Around' },
    { key: 'Ctrl + Shift + Space', command: 'Play In to Out' },
    { key: 'Shift + Space', command: 'Play In to Out with Preroll/Postroll' },
    { key: 'Ctrl + Space', command: 'Play from Playhead to Out Point' },
    { key: 'Space', command: 'Play-Stop Toggle' },
    { key: 'Ctrl + Shift + F', command: 'Reveal Nested Sequence' },
    { key: 'W', command: 'Ripple Trim Next Edit To Playhead' },
    { key: 'Q', command: 'Ripple Trim Previous Edit To Playhead' },
    { key: '1', command: 'Select Camera 1' },
    { key: '2', command: 'Select Camera 2' },
    { key: '3', command: 'Select Camera 3' },
    { key: '4', command: 'Select Camera 4' },
    { key: '5', command: 'Select Camera 5' },
    { key: '6', command: 'Select Camera 6' },
    { key: '7', command: 'Select Camera 7' },
    { key: '8', command: 'Select Camera 8' },
    { key: '9', command: 'Select Camera 9' },
    { key: 'Shift + F', command: 'Select Find Box' },
    { key: 'D', command: 'Select Clip at Playhead' },
    { key: 'Ctrl + Down', command: 'Select Next Clip' },
    { key: 'Ctrl + Shift + .', command: 'Select Next Panel' },
    { key: 'Ctrl + Up', command: 'Select Previous Clip' },
    { key: 'Ctrl + Shift + ,', command: 'Select Previous Panel' },
    { key: 'Shift + P', command: 'Set Poster Frame' },
    { key: 'J', command: 'Shuttle Left' },
    { key: 'L', command: 'Shuttle Right' },
    { key: 'Shift + J', command: 'Shuttle Slow Left' },
    { key: 'Shift + L', command: 'Shuttle Slow Right' },
    { key: 'K', command: 'Shuttle Stop' },
    { key: 'Left', command: 'Step Back' },
    { key: 'Shift + Left', command: 'Step Back Five Frames - Units' },
    { key: 'Right', command: 'Step Forward' },
    { key: 'Shift + Right', command: 'Step Forward Five Frames - Units' },
    { key: 'Ctrl + 9', command: 'Toggle All Audio Targets' },
    { key: 'Ctrl + Alt + 9', command: 'Toggle All Source Audio' },
    { key: 'Ctrl + Alt + 0', command: 'Toggle All Source Video' },
    { key: 'Ctrl + 0', command: 'Toggle All Video Targets' },
    { key: 'Shift + S', command: 'Toggle Audio During Scrubbing' },
    { key: 'Ctrl + `', command: 'Toggle Full Screen' },
    { key: 'Shift + 0', command: 'Toggle Multi-Camera View' },
    { key: 'Shift + T', command: 'Toggle Trim Type' },
    { key: 'Ctrl + Left', command: 'Trim Backward' },
    { key: 'Ctrl + Shift + Left', command: 'Trim Backward Many' },
    { key: 'Ctrl + Right', command: 'Trim Forward' },
    { key: 'Ctrl + Shift + Right', command: 'Trim Forward Many' },
    { key: 'Ctrl + Alt + W', command: 'Trim Next Edit to Playhead' },
    { key: 'Ctrl + Alt + Q', command: 'Trim Previous Edit to Playhead' },
  ];

  programMonitor: Shortcut[] = [
    { key: 'Ctrl + R', command: 'Show Rulers' },
    { key: 'Ctrl + ;', command: 'Show Guides' },
    { key: 'Ctrl + Shift + ;', command: 'Snap in Program Monitor' },
    { key: 'Ctrl + Alt + Shift + R', command: 'Lock Guides' },
    { key: 'Shift + Ctrl + Up', command: 'Nudge Selected Object up by five frames' },
    { key: 'Shift + Ctrl + Right', command: 'Nudge Selected Object right by five frames' },
    { key: 'Shift + Ctrl + Left', command: 'Nudge Selected Object left by five frames' },
    { key: 'Shift + Ctrl + Down', command: 'Nudge Selected Object down by five frames' },
    { key: 'Ctrl + Up', command: 'Nudge Selected Object up by one frame' },
    { key: 'Ctrl + Right', command: 'Nudge Selected Object right by one frame' },
    { key: 'Ctrl + Left', command: 'Nudge Selected Object left by one frame' },
    { key: 'Ctrl + Down', command: 'Nudge Selected Object down by one frame' },
  ];

  projectPanel: Shortcut[] = [
    { key: 'Ctrl + B', command: 'New Bin' },
    { key: 'Backspace', command: 'Delete' },
    { key: 'Delete', command: 'Delete' },
    { key: 'Ctrl + Page Up', command: 'List' },
    { key: 'Ctrl + Page Down', command: 'Icon' },
    { key: 'Shift + H', command: 'Hover Scrub' },
    { key: 'Ctrl + Delete', command: 'Delete Selection with Options' },
    { key: 'Shift + Down', command: 'Extend Selection Down' },
    { key: 'Shift + Left', command: 'Extend Selection Left' },
    { key: 'Shift + Right', command: 'Extend Selection Right' },
    { key: 'Shift + Up', command: 'Extend Selection Up' },
    { key: 'Down', command: 'Move Selection Down' },
    { key: 'End', command: 'Move Selection End' },
    { key: 'Home', command: 'Move Selection Home' },
    { key: 'Left', command: 'Move Selection Left' },
    { key: 'Page Down', command: 'Move Selection Page Down' },
    { key: 'Page Up', command: 'Move Selection Page Up' },
    { key: 'Right', command: 'Move Selection Right' },
    { key: 'Up', command: 'Move Selection Up' },
    { key: 'Tab', command: 'Next Column Field' },
    { key: 'Enter', command: 'Next Row Field' },
    { key: 'Return', command: 'Next Row Field' },
    { key: 'Shift + O', command: 'Open in Source Monitor' },
    { key: 'Shift + Tab', command: 'Previous Column Field' },
    { key: 'Shift + Enter', command: 'Previous Row Field' },
    { key: 'Shift + Return', command: 'Previous Row Field' },
    { key: 'Shift + ]', command: 'Thumbnail Size Next' },
    { key: 'Shift + [', command: 'Thumbnail Size Previous' },
    { key: 'Shift + \\', command: 'Toggle View' },
    { key: '=', command: 'Zoom In' },
    { key: '-', command: 'Zoom Out' },
  ];

  sourceAndTrack: Shortcut[] = [
    { key: 'Click', command: 'Toggle selected state' },
    { key: 'Ctrl + Drag', command: 'Turn on/off as you click and drag, based on the first track' },
    { key: 'Drag', command: 'Swap tracks (not applicable to Track targeting)' },
    { key: 'Shift + Drag', command: 'Move entire set of tracks up or down (not applicable to Track targeting)' },
    { key: 'Shift + Scroll', command: 'Uniformly change all video or audio track height' },
    { key: 'Opt + Click', command: 'Toggle "Gap" (not applicable to Track targeting)' },
    { key: 'Opt + Scroll', command: 'Change height of single track' },
    { key: 'Ctrl + Opt + Drag', command: 'Toggle "Gap" (not applicable to Track targeting)' },
  ];

  timeline: Shortcut[] = [
    { key: 'Backspace', command: 'Clear Selection' },
    { key: 'Alt + -', command: 'Decrease Audio Tracks Height' },
    { key: 'Ctrl + -', command: 'Decrease Video Tracks Height' },
    { key: 'Alt + =', command: 'Increase Audio Tracks Height' },
    { key: 'Ctrl + =', command: 'Increase Video Tracks Height' },
    { key: 'Alt + Shift + Left', command: 'Nudge Clip Selection Left Five Frames' },
    { key: 'Alt + Left', command: 'Nudge Clip Selection Left One Frame' },
    { key: 'Alt + Shift + Right', command: 'Nudge Clip Selection Right Five Frames' },
    { key: 'Alt + Right', command: 'Nudge Clip Selection Right One Frame' },
    { key: 'Alt + Backspace', command: 'Ripple Delete' },
    { key: 'Alt + [', command: 'Set Work Area Bar In Point' },
    { key: 'Alt + ]', command: 'Set Work Area Bar Out Point' },
    { key: 'Page Down', command: 'Show Next Screen' },
    { key: 'Page Up', command: 'Show Previous Screen' },
    { key: 'Alt + Shift + ,', command: 'Slide Clip Selection Left Five Frames' },
    { key: 'Alt + ,', command: 'Slide Clip Selection Left One Frame' },
    { key: 'Alt + Shift + .', command: 'Slide Clip Selection Right Five Frames' },
    { key: 'Alt + .', command: 'Slide Clip Selection Right One Frame' },
    { key: 'Ctrl + Alt + Shift + Left', command: 'Slip Clip Selection Left Five Frames' },
    { key: 'Ctrl + Alt + Left', command: 'Slip Clip Selection Left One Frame' },
    { key: 'Ctrl + Alt + Shift + Right', command: 'Slip Clip Selection Right Five Frames' },
    { key: 'Ctrl + Alt + Right', command: 'Slip Clip Selection Right One Frame' },
  ];
}
