import { a as jr } from "./chunk-VNJPXKHG.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as D,
  A as In,
  Aa as et,
  B as Qe,
  C as Hn,
  D as Vn,
  E as Xn,
  F as Bn,
  G as Nn,
  H as Nt,
  M as Dt,
  O as zt,
  P as Le,
  R as b,
  U as je,
  W as Wt,
  X as Ze,
  Y as ct,
  aa as z,
  b as Xt,
  c as U,
  ca as ft,
  d as Ar,
  da as Dn,
  ea as zn,
  f as kr,
  fa as Wn,
  g as lt,
  ga as Ge,
  h as Fn,
  ia as oe,
  j as Je,
  k as Pn,
  l as le,
  la as xt,
  m as Bt,
  n as Mn,
  p as de,
  pa as Yn,
  q as re,
  qa as Un,
  r as Ne,
  s as Ue,
  sa as Gn,
  t as Ln,
  ta as qn,
  u as r,
  ua as $n,
  v as K,
  va as we,
  w as Tr,
  wa as Ae,
  x as Or,
  y as Er,
  ya as Rr,
  z as J,
  za as Yt,
} from "./chunk-WJ43E2VD.mjs";
import { b as M, c as j, d as I } from "./chunk-OIST4OYN.mjs";
var zo = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var Wo = {
    ...zo,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  Kn = lt((t, n) => r("div", { style: Wo, ref: n }));
var Yo = (t) => t,
  Fr,
  Jn = (t) => (
    Fr ||
      (Fr = Yo(
        t.createElement("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
        "Home"
      )),
    Fr
  );
var Qn = {
    onClick: { type: b.EventHandler },
    onMouseDown: { type: b.EventHandler },
    onMouseUp: { type: b.EventHandler },
    onMouseEnter: { type: b.EventHandler },
    onMouseLeave: { type: b.EventHandler },
  },
  Zn = (t, n) => t.find((o) => o.toLowerCase().includes(n));
function ea(t, n, o = "", i, c) {
  if (n) return i;
  if (o == null || o?.length === 0) return null;
  let f = o.toLowerCase().replace(/-|\s/g, "");
  var u;
  return (u = c[f]) !== null && u !== void 0 ? u : Zn(t, f);
}
function ta(t, n, o = "", i, c) {
  let f = de(() => {
    if (o == null || o?.length === 0) return null;
    let m = o.toLowerCase().replace(/-|\s/g, "");
    var y;
    return (y = c[m]) !== null && y !== void 0 ? y : Zn(t, m);
  }, [i, o]);
  return n ? i : f;
}
var Uo = "https://framer.com/m/material-icons/",
  Ut = {
    AcUnit: 15,
    AccessAlarm: 15,
    AccessAlarms: 15,
    AccessTime: 15,
    AccessTimeFilled: 0,
    Accessibility: 7,
    AccessibilityNew: 0,
    Accessible: 15,
    AccessibleForward: 0,
    AccountBalance: 2,
    AccountBalanceWallet: 0,
    AccountBox: 15,
    AccountCircle: 7,
    AccountTree: 15,
    AdUnits: 15,
    Adb: 15,
    Add: 15,
    AddAPhoto: 15,
    AddAlarm: 15,
    AddAlert: 15,
    AddBox: 15,
    AddBusiness: 15,
    AddCircle: 15,
    AddCircleOutline: 0,
    AddComment: 15,
    AddIcCall: 15,
    AddLink: 15,
    AddLocation: 15,
    AddLocationAlt: 2,
    AddModerator: 15,
    AddPhotoAlternate: 0,
    AddReaction: 15,
    AddRoad: 15,
    AddShoppingCart: 2,
    AddTask: 15,
    AddToDrive: 15,
    AddToHomeScreen: 2,
    AddToPhotos: 15,
    AddToQueue: 15,
    Addchart: 15,
    Adjust: 15,
    AdminPanelSettings: 0,
    Agriculture: 15,
    Air: 15,
    AirlineSeatFlat: 2,
    AirplaneTicket: 2,
    AirplanemodeActive: 0,
    AirplanemodeInactive: 0,
    Airplay: 15,
    AirportShuttle: 2,
    Alarm: 15,
    AlarmAdd: 15,
    AlarmOff: 15,
    AlarmOn: 15,
    Album: 15,
    AlignHorizontalLeft: 0,
    AlignHorizontalRight: 0,
    AlignVerticalBottom: 0,
    AlignVerticalCenter: 0,
    AlignVerticalTop: 0,
    AllInbox: 15,
    AllInclusive: 15,
    AllOut: 15,
    AltRoute: 15,
    AlternateEmail: 2,
    Analytics: 15,
    Anchor: 15,
    Android: 15,
    Animation: 15,
    Announcement: 15,
    Aod: 15,
    Apartment: 15,
    Api: 15,
    AppBlocking: 15,
    AppRegistration: 2,
    AppSettingsAlt: 2,
    Apple: 0,
    Approval: 15,
    Apps: 15,
    Architecture: 15,
    Archive: 15,
    ArrowBack: 15,
    ArrowBackIos: 15,
    ArrowBackIosNew: 2,
    ArrowCircleDown: 2,
    ArrowCircleUp: 7,
    ArrowDownward: 7,
    ArrowDropDown: 7,
    ArrowDropDownCircle: 0,
    ArrowDropUp: 15,
    ArrowForward: 15,
    ArrowForwardIos: 2,
    ArrowLeft: 15,
    ArrowRight: 15,
    ArrowRightAlt: 7,
    ArrowUpward: 15,
    ArtTrack: 15,
    Article: 15,
    AspectRatio: 15,
    Assessment: 15,
    Assignment: 15,
    AssignmentInd: 7,
    AssignmentLate: 2,
    AssignmentReturn: 0,
    AssignmentReturned: 0,
    AssignmentTurnedIn: 0,
    Assistant: 15,
    AssistantDirection: 0,
    AssistantPhoto: 2,
    Atm: 15,
    AttachEmail: 15,
    AttachFile: 15,
    AttachMoney: 15,
    Attachment: 15,
    Attractions: 15,
    Attribution: 15,
    Audiotrack: 15,
    AutoAwesome: 15,
    AutoAwesomeMosaic: 0,
    AutoAwesomeMotion: 0,
    AutoDelete: 15,
    AutoFixHigh: 15,
    AutoFixNormal: 7,
    AutoFixOff: 15,
    AutoGraph: 15,
    AutoStories: 15,
    AutofpsSelect: 7,
    Autorenew: 15,
    AvTimer: 15,
    BabyChangingStation: 0,
    Backpack: 15,
    Backspace: 15,
    Backup: 15,
    BackupTable: 15,
    Badge: 15,
    BakeryDining: 15,
    Balcony: 15,
    Ballot: 15,
    BarChart: 15,
    BatchPrediction: 2,
    Bathroom: 15,
    Bathtub: 15,
    Battery20: 15,
    Battery30: 15,
    Battery50: 15,
    Battery60: 15,
    Battery80: 15,
    Battery90: 15,
    BatteryAlert: 15,
    BatteryCharging20: 0,
    BatteryCharging30: 0,
    BatteryCharging50: 0,
    BatteryCharging60: 0,
    BatteryCharging80: 0,
    BatteryCharging90: 0,
    BatteryChargingFull: 0,
    BatteryFull: 15,
    BatterySaver: 15,
    BatteryStd: 15,
    BatteryUnknown: 2,
    BeachAccess: 15,
    Bed: 15,
    BedroomBaby: 15,
    BedroomChild: 15,
    BedroomParent: 7,
    Bedtime: 15,
    Beenhere: 15,
    Bento: 15,
    BikeScooter: 15,
    Biotech: 15,
    Blender: 15,
    Block: 15,
    Bloodtype: 15,
    Bluetooth: 15,
    BluetoothAudio: 2,
    BluetoothConnected: 0,
    BluetoothDisabled: 0,
    BluetoothDrive: 2,
    BluetoothSearching: 0,
    BlurCircular: 15,
    BlurLinear: 15,
    BlurOff: 15,
    BlurOn: 15,
    Bolt: 15,
    Book: 15,
    BookOnline: 15,
    Bookmark: 15,
    BookmarkAdd: 15,
    BookmarkAdded: 7,
    BookmarkBorder: 2,
    BookmarkRemove: 2,
    Bookmarks: 15,
    BorderAll: 15,
    BorderBottom: 15,
    BorderClear: 15,
    BorderColor: 15,
    BorderHorizontal: 0,
    BorderInner: 15,
    BorderLeft: 15,
    BorderOuter: 15,
    BorderRight: 15,
    BorderStyle: 15,
    BorderTop: 15,
    BorderVertical: 2,
    BrandingWatermark: 0,
    BreakfastDining: 2,
    Brightness1: 15,
    Brightness2: 15,
    Brightness3: 15,
    Brightness4: 15,
    Brightness5: 15,
    Brightness6: 15,
    Brightness7: 15,
    BrightnessAuto: 2,
    BrightnessHigh: 2,
    BrightnessLow: 7,
    BrightnessMedium: 0,
    BrokenImage: 15,
    BrowserNotSupported: 0,
    BrunchDining: 15,
    Brush: 15,
    BubbleChart: 15,
    BugReport: 15,
    Build: 15,
    BuildCircle: 15,
    Bungalow: 15,
    BurstMode: 15,
    BusAlert: 15,
    Business: 15,
    BusinessCenter: 2,
    Cabin: 15,
    Cable: 15,
    Cached: 15,
    Cake: 15,
    Calculate: 15,
    CalendarToday: 7,
    CalendarViewDay: 2,
    CalendarViewMonth: 0,
    CalendarViewWeek: 0,
    Call: 15,
    CallEnd: 15,
    CallMade: 15,
    CallMerge: 15,
    CallMissed: 15,
    CallMissedOutgoing: 0,
    CallReceived: 15,
    CallSplit: 15,
    CallToAction: 15,
    Camera: 15,
    CameraAlt: 15,
    CameraEnhance: 7,
    CameraFront: 15,
    CameraIndoor: 15,
    CameraOutdoor: 7,
    CameraRear: 15,
    CameraRoll: 15,
    Cameraswitch: 15,
    Campaign: 15,
    Cancel: 15,
    CancelPresentation: 0,
    CancelScheduleSend: 0,
    CarRental: 15,
    CarRepair: 15,
    CardGiftcard: 15,
    CardMembership: 2,
    CardTravel: 15,
    Carpenter: 15,
    Cases: 15,
    Casino: 15,
    Cast: 15,
    CastConnected: 7,
    CastForEducation: 0,
    CatchingPokemon: 2,
    Category: 15,
    Celebration: 15,
    CellWifi: 15,
    CenterFocusStrong: 0,
    CenterFocusWeak: 2,
    Chair: 15,
    ChairAlt: 15,
    Chalet: 15,
    ChangeCircle: 15,
    ChangeHistory: 7,
    ChargingStation: 2,
    Chat: 15,
    ChatBubble: 15,
    ChatBubbleOutline: 0,
    Check: 15,
    CheckBox: 15,
    CheckBoxOutlineBlank: 0,
    CheckCircle: 15,
    CheckCircleOutline: 0,
    Checkroom: 15,
    ChevronLeft: 15,
    ChevronRight: 15,
    ChildCare: 15,
    ChildFriendly: 7,
    ChromeReaderMode: 0,
    Circle: 15,
    CircleNotifications: 0,
    Class: 15,
    CleanHands: 15,
    CleaningServices: 0,
    Clear: 15,
    ClearAll: 15,
    Close: 15,
    CloseFullscreen: 2,
    ClosedCaption: 7,
    ClosedCaptionOff: 0,
    Cloud: 15,
    CloudCircle: 15,
    CloudDone: 15,
    CloudDownload: 7,
    CloudOff: 15,
    CloudQueue: 15,
    CloudUpload: 15,
    Code: 15,
    CodeOff: 15,
    Coffee: 15,
    CoffeeMaker: 15,
    Collections: 15,
    CollectionsBookmark: 0,
    ColorLens: 15,
    Colorize: 15,
    Comment: 15,
    CommentBank: 15,
    Commute: 15,
    Compare: 15,
    CompareArrows: 7,
    CompassCalibration: 0,
    Compress: 15,
    Computer: 15,
    ConfirmationNumber: 0,
    ConnectedTv: 15,
    Construction: 15,
    ContactMail: 15,
    ContactPage: 15,
    ContactPhone: 15,
    ContactSupport: 2,
    Contactless: 15,
    Contacts: 15,
    ContentCopy: 15,
    ContentCut: 15,
    ContentPaste: 15,
    ContentPasteOff: 2,
    ControlCamera: 7,
    ControlPoint: 15,
    CopyAll: 15,
    Copyright: 15,
    Coronavirus: 15,
    CorporateFare: 7,
    Cottage: 15,
    Countertops: 15,
    Create: 15,
    CreateNewFolder: 2,
    CreditCard: 15,
    CreditCardOff: 7,
    CreditScore: 15,
    Crib: 15,
    Crop: 15,
    Crop169: 15,
    Crop32: 15,
    Crop54: 15,
    Crop75: 15,
    CropDin: 15,
    CropFree: 15,
    CropLandscape: 7,
    CropOriginal: 15,
    CropPortrait: 15,
    CropRotate: 15,
    CropSquare: 15,
    Dangerous: 15,
    DarkMode: 15,
    Dashboard: 15,
    DashboardCustomize: 0,
    DataSaverOff: 15,
    DataSaverOn: 15,
    DataUsage: 15,
    DateRange: 15,
    Deck: 15,
    Dehaze: 15,
    Delete: 15,
    DeleteForever: 7,
    DeleteOutline: 7,
    DeleteSweep: 15,
    DeliveryDining: 2,
    DepartureBoard: 2,
    Description: 15,
    DesignServices: 2,
    DesktopMac: 15,
    DesktopWindows: 2,
    Details: 15,
    DeveloperBoard: 2,
    DeveloperBoardOff: 0,
    DeveloperMode: 7,
    DeviceHub: 15,
    DeviceThermostat: 0,
    DeviceUnknown: 7,
    Devices: 15,
    DevicesOther: 15,
    DialerSip: 15,
    Dialpad: 15,
    Dining: 15,
    DinnerDining: 15,
    Directions: 15,
    DirectionsBike: 2,
    DirectionsBoat: 2,
    DirectionsBoatFilled: 0,
    DirectionsBus: 7,
    DirectionsBusFilled: 0,
    DirectionsCar: 7,
    DirectionsCarFilled: 0,
    DirectionsOff: 7,
    DirectionsRailway: 0,
    DirectionsRun: 7,
    DirectionsSubway: 0,
    DirectionsTransit: 0,
    DirectionsWalk: 2,
    DirtyLens: 15,
    DisabledByDefault: 0,
    DiscFull: 15,
    Dns: 15,
    DoDisturb: 15,
    DoDisturbAlt: 15,
    DoDisturbOff: 15,
    DoDisturbOn: 15,
    DoNotDisturb: 15,
    DoNotDisturbAlt: 2,
    DoNotDisturbOff: 2,
    DoNotDisturbOn: 2,
    DoNotStep: 15,
    DoNotTouch: 15,
    Dock: 15,
    DocumentScanner: 2,
    Domain: 15,
    DomainDisabled: 2,
    DomainVerification: 0,
    Done: 15,
    DoneAll: 15,
    DoneOutline: 15,
    DonutLarge: 15,
    DonutSmall: 15,
    DoorBack: 15,
    DoorFront: 15,
    DoorSliding: 15,
    Doorbell: 15,
    DoubleArrow: 15,
    DownhillSkiing: 2,
    Download: 15,
    DownloadDone: 15,
    DownloadForOffline: 0,
    Downloading: 15,
    Drafts: 15,
    DragHandle: 15,
    DragIndicator: 7,
    DriveEta: 15,
    DriveFileMove: 7,
    DriveFolderUpload: 0,
    Dry: 15,
    DryCleaning: 15,
    Duo: 15,
    Dvr: 15,
    DynamicFeed: 15,
    DynamicForm: 15,
    EMobiledata: 15,
    Earbuds: 15,
    EarbudsBattery: 2,
    East: 15,
    Eco: 15,
    EdgesensorHigh: 2,
    EdgesensorLow: 7,
    Edit: 15,
    EditAttributes: 2,
    EditLocation: 15,
    EditLocationAlt: 2,
    EditNotifications: 0,
    EditOff: 15,
    EditRoad: 15,
    EightK: 15,
    EightKPlus: 15,
    EightMp: 15,
    EightteenMp: 15,
    Eject: 15,
    Elderly: 15,
    ElectricBike: 15,
    ElectricCar: 15,
    ElectricMoped: 7,
    ElectricRickshaw: 0,
    ElectricScooter: 2,
    ElectricalServices: 0,
    Elevator: 15,
    ElevenMp: 15,
    Email: 15,
    EmojiEmotions: 7,
    EmojiEvents: 15,
    EmojiFlags: 15,
    EmojiFoodBeverage: 0,
    EmojiNature: 15,
    EmojiObjects: 15,
    EmojiPeople: 15,
    EmojiSymbols: 15,
    EmojiTransportation: 0,
    Engineering: 15,
    EnhancedEncryption: 0,
    Equalizer: 15,
    Error: 15,
    ErrorOutline: 15,
    Escalator: 15,
    EscalatorWarning: 0,
    Euro: 15,
    EuroSymbol: 15,
    EvStation: 15,
    Event: 15,
    EventAvailable: 2,
    EventBusy: 15,
    EventNote: 15,
    EventSeat: 15,
    ExitToApp: 15,
    Expand: 15,
    ExpandLess: 15,
    ExpandMore: 15,
    Explicit: 15,
    Explore: 15,
    ExploreOff: 15,
    Exposure: 15,
    Extension: 15,
    ExtensionOff: 15,
    Face: 15,
    FaceRetouchingOff: 0,
    Facebook: 15,
    FactCheck: 15,
    FamilyRestroom: 2,
    FastForward: 15,
    FastRewind: 15,
    Fastfood: 15,
    Favorite: 15,
    FavoriteBorder: 2,
    FeaturedPlayList: 0,
    FeaturedVideo: 7,
    Feed: 15,
    Feedback: 15,
    Female: 15,
    Fence: 15,
    Festival: 15,
    FiberDvr: 15,
    FiberManualRecord: 0,
    FiberNew: 15,
    FiberPin: 15,
    FiberSmartRecord: 0,
    FileCopy: 15,
    FileDownload: 15,
    FileDownloadDone: 0,
    FileDownloadOff: 2,
    FilePresent: 15,
    FileUpload: 15,
    Filter: 15,
    Filter1: 15,
    Filter2: 15,
    Filter3: 15,
    Filter4: 15,
    Filter5: 15,
    Filter6: 15,
    Filter7: 15,
    Filter8: 15,
    Filter9: 15,
    Filter9Plus: 15,
    FilterAlt: 15,
    FilterBAndW: 15,
    FilterCenterFocus: 0,
    FilterDrama: 15,
    FilterFrames: 15,
    FilterHdr: 15,
    FilterList: 15,
    FilterNone: 15,
    FilterTiltShift: 2,
    FilterVintage: 7,
    FindInPage: 15,
    FindReplace: 15,
    Fingerprint: 15,
    FireExtinguisher: 0,
    Fireplace: 15,
    FirstPage: 15,
    FitScreen: 15,
    FitnessCenter: 7,
    FiveG: 15,
    FiveK: 15,
    FiveKPlus: 15,
    FiveMp: 15,
    FivteenMp: 15,
    Flag: 15,
    Flaky: 15,
    Flare: 15,
    FlashAuto: 15,
    FlashOff: 15,
    FlashOn: 15,
    FlashlightOff: 7,
    FlashlightOn: 15,
    Flatware: 15,
    Flight: 15,
    FlightLand: 15,
    FlightTakeoff: 7,
    Flip: 15,
    FlipCameraAndroid: 0,
    FlipCameraIos: 7,
    FlipToBack: 15,
    FlipToFront: 15,
    Flourescent: 15,
    FlutterDash: 15,
    FmdBad: 15,
    FmdGood: 15,
    Folder: 15,
    FolderOpen: 15,
    FolderShared: 15,
    FolderSpecial: 7,
    FollowTheSigns: 2,
    FontDownload: 15,
    FontDownloadOff: 2,
    FoodBank: 15,
    FormatAlignCenter: 0,
    FormatAlignJustify: 0,
    FormatAlignLeft: 2,
    FormatAlignRight: 0,
    FormatBold: 15,
    FormatClear: 15,
    FormatColorFill: 2,
    FormatColorReset: 0,
    FormatColorText: 2,
    FormatIndentDecrease: 0,
    FormatIndentIncrease: 0,
    FormatItalic: 15,
    FormatLineSpacing: 0,
    FormatListBulleted: 0,
    FormatListNumbered: 0,
    FormatPaint: 15,
    FormatQuote: 15,
    FormatShapes: 15,
    FormatSize: 15,
    FormatStrikethrough: 0,
    FormatUnderlined: 0,
    Forum: 15,
    Forward: 15,
    Forward10: 15,
    Forward30: 15,
    Forward5: 15,
    ForwardToInbox: 2,
    Foundation: 15,
    FourGMobiledata: 2,
    FourGPlusMobiledata: 0,
    FourK: 15,
    FourKPlus: 15,
    FourMp: 15,
    FourteenMp: 15,
    FreeBreakfast: 7,
    Fullscreen: 15,
    FullscreenExit: 2,
    Functions: 15,
    GMobiledata: 15,
    GTranslate: 15,
    Gamepad: 15,
    Games: 15,
    Garage: 15,
    Gavel: 15,
    Gesture: 15,
    GetApp: 15,
    Gif: 15,
    GitHub: 0,
    Gite: 15,
    GolfCourse: 15,
    Google: 0,
    GppBad: 15,
    GppGood: 15,
    GppMaybe: 15,
    GpsFixed: 15,
    GpsNotFixed: 15,
    GpsOff: 15,
    Grade: 15,
    Gradient: 15,
    Grading: 15,
    Grain: 15,
    GraphicEq: 15,
    Grass: 15,
    Grid3x3: 15,
    Grid4x4: 15,
    GridGoldenratio: 2,
    GridOff: 15,
    GridOn: 15,
    GridView: 15,
    Group: 15,
    GroupAdd: 15,
    GroupWork: 15,
    Groups: 15,
    HMobiledata: 15,
    HPlusMobiledata: 2,
    Hail: 15,
    Handyman: 15,
    Hardware: 15,
    Hd: 15,
    HdrAuto: 15,
    HdrAutoSelect: 7,
    HdrEnhancedSelect: 0,
    HdrOff: 15,
    HdrOffSelect: 15,
    HdrOn: 15,
    HdrOnSelect: 15,
    HdrPlus: 15,
    HdrStrong: 15,
    HdrWeak: 15,
    Headphones: 15,
    HeadphonesBattery: 0,
    Headset: 15,
    HeadsetMic: 15,
    HeadsetOff: 15,
    Healing: 15,
    HealthAndSafety: 2,
    Hearing: 15,
    HearingDisabled: 2,
    Height: 15,
    Help: 15,
    HelpCenter: 15,
    HelpOutline: 15,
    Hevc: 15,
    HideImage: 15,
    HideSource: 15,
    HighQuality: 15,
    Highlight: 15,
    HighlightAlt: 15,
    HighlightOff: 15,
    Hiking: 15,
    History: 15,
    HistoryEdu: 15,
    HistoryToggleOff: 0,
    HolidayVillage: 2,
    Home: 15,
    HomeMax: 15,
    HomeMini: 15,
    HomeRepairService: 0,
    HomeWork: 15,
    HorizontalRule: 2,
    HorizontalSplit: 2,
    HotTub: 15,
    Hotel: 15,
    HourglassBottom: 2,
    HourglassDisabled: 0,
    HourglassEmpty: 2,
    HourglassFull: 7,
    HourglassTop: 15,
    House: 15,
    HouseSiding: 15,
    Houseboat: 15,
    HowToReg: 15,
    HowToVote: 15,
    Http: 15,
    Https: 15,
    Hvac: 15,
    IceSkating: 15,
    Icecream: 15,
    Image: 15,
    ImageAspectRatio: 0,
    ImageNotSupported: 0,
    ImageSearch: 15,
    ImagesearchRoller: 0,
    ImportContacts: 2,
    ImportExport: 15,
    ImportantDevices: 0,
    Inbox: 15,
    Info: 15,
    Input: 15,
    InsertChart: 15,
    InsertComment: 7,
    InsertDriveFile: 2,
    InsertEmoticon: 2,
    InsertInvitation: 0,
    InsertLink: 15,
    InsertPhoto: 15,
    Insights: 15,
    Instagram: 0,
    Inventory: 15,
    Inventory2: 15,
    InvertColors: 15,
    InvertColorsOff: 2,
    IosShare: 15,
    Iron: 15,
    Iso: 15,
    Kayaking: 15,
    Keyboard: 15,
    KeyboardAlt: 15,
    KeyboardArrowDown: 0,
    KeyboardArrowLeft: 0,
    KeyboardArrowRight: 0,
    KeyboardArrowUp: 2,
    KeyboardBackspace: 0,
    KeyboardCapslock: 0,
    KeyboardHide: 15,
    KeyboardReturn: 2,
    KeyboardTab: 15,
    KeyboardVoice: 7,
    KingBed: 15,
    Kitchen: 15,
    Kitesurfing: 15,
    Label: 15,
    LabelImportant: 2,
    LabelOff: 15,
    Landscape: 15,
    Language: 15,
    Laptop: 15,
    LaptopChromebook: 0,
    LaptopMac: 15,
    LaptopWindows: 7,
    LastPage: 15,
    Launch: 15,
    Layers: 15,
    LayersClear: 15,
    Leaderboard: 15,
    LeakAdd: 15,
    LeakRemove: 15,
    LegendToggle: 15,
    Lens: 15,
    LensBlur: 15,
    LibraryAdd: 15,
    LibraryAddCheck: 2,
    LibraryBooks: 15,
    LibraryMusic: 15,
    Light: 15,
    LightMode: 15,
    Lightbulb: 15,
    LineStyle: 15,
    LineWeight: 15,
    LinearScale: 15,
    Link: 15,
    LinkOff: 15,
    LinkedCamera: 15,
    LinkedIn: 0,
    Liquor: 15,
    List: 15,
    ListAlt: 15,
    LiveHelp: 15,
    LiveTv: 15,
    Living: 15,
    LocalActivity: 7,
    LocalAirport: 15,
    LocalAtm: 15,
    LocalBar: 15,
    LocalCafe: 15,
    LocalCarWash: 15,
    LocalDining: 15,
    LocalDrink: 15,
    LocalFireDepartment: 0,
    LocalFlorist: 15,
    LocalGasStation: 2,
    LocalGroceryStore: 0,
    LocalHospital: 7,
    LocalHotel: 15,
    LocalLaundryService: 0,
    LocalLibrary: 15,
    LocalMall: 15,
    LocalMovies: 15,
    LocalOffer: 15,
    LocalParking: 15,
    LocalPharmacy: 7,
    LocalPhone: 15,
    LocalPizza: 15,
    LocalPlay: 15,
    LocalPolice: 15,
    LocalPostOffice: 2,
    LocalPrintshop: 2,
    LocalSee: 15,
    LocalShipping: 7,
    LocalTaxi: 15,
    LocationCity: 15,
    LocationDisabled: 0,
    LocationOff: 15,
    LocationOn: 15,
    LocationSearching: 0,
    Lock: 15,
    LockClock: 15,
    LockOpen: 15,
    Login: 15,
    Logout: 15,
    Looks: 15,
    Looks3: 15,
    Looks4: 15,
    Looks5: 15,
    Looks6: 15,
    LooksOne: 15,
    LooksTwo: 15,
    Loop: 15,
    Loupe: 15,
    LowPriority: 15,
    Loyalty: 15,
    LteMobiledata: 7,
    LtePlusMobiledata: 0,
    Luggage: 15,
    LunchDining: 15,
    Mail: 15,
    MailOutline: 15,
    Male: 15,
    ManageAccounts: 2,
    ManageSearch: 15,
    Map: 15,
    MapsHomeWork: 15,
    MapsUgc: 15,
    Margin: 15,
    MarkAsUnread: 15,
    MarkChatRead: 15,
    MarkChatUnread: 2,
    MarkEmailRead: 7,
    MarkEmailUnread: 2,
    Markunread: 15,
    MarkunreadMailbox: 0,
    Masks: 15,
    Maximize: 15,
    MediaBluetoothOff: 0,
    MediaBluetoothOn: 0,
    Mediation: 15,
    MedicalServices: 2,
    Medication: 15,
    MeetingRoom: 15,
    Memory: 15,
    Menu: 15,
    MenuBook: 15,
    MenuOpen: 15,
    MergeType: 15,
    Message: 15,
    Mic: 15,
    MicExternalOff: 2,
    MicExternalOn: 7,
    MicNone: 15,
    MicOff: 15,
    Microwave: 15,
    MilitaryTech: 15,
    Minimize: 15,
    MissedVideoCall: 2,
    Mms: 15,
    MobileFriendly: 2,
    MobileOff: 15,
    MobileScreenShare: 0,
    MobiledataOff: 7,
    Mode: 15,
    ModeComment: 15,
    ModeEdit: 15,
    ModeEditOutline: 2,
    ModeNight: 15,
    ModeStandby: 15,
    ModelTraining: 7,
    MonetizationOn: 2,
    Money: 15,
    MoneyOff: 15,
    MoneyOffCsred: 7,
    Monitor: 15,
    MonitorWeight: 7,
    MonochromePhotos: 0,
    Mood: 15,
    MoodBad: 15,
    Moped: 15,
    More: 15,
    MoreHoriz: 15,
    MoreTime: 15,
    MoreVert: 15,
    MotionPhotosAuto: 0,
    MotionPhotosOff: 2,
    Mouse: 15,
    MoveToInbox: 15,
    Movie: 15,
    MovieCreation: 7,
    MovieFilter: 15,
    Moving: 15,
    Mp: 15,
    MultilineChart: 2,
    MultipleStop: 15,
    Museum: 15,
    MusicNote: 15,
    MusicOff: 15,
    MusicVideo: 15,
    MyLocation: 15,
    Nat: 15,
    Nature: 15,
    NaturePeople: 15,
    NavigateBefore: 2,
    NavigateNext: 15,
    Navigation: 15,
    NearMe: 15,
    NearMeDisabled: 2,
    NearbyError: 15,
    NearbyOff: 15,
    NetworkCell: 15,
    NetworkCheck: 15,
    NetworkLocked: 7,
    NetworkWifi: 15,
    NewReleases: 15,
    NextPlan: 15,
    NextWeek: 15,
    Nfc: 15,
    NightShelter: 15,
    Nightlife: 15,
    Nightlight: 15,
    NightlightRound: 2,
    NightsStay: 15,
    NineK: 15,
    NineKPlus: 15,
    NineMp: 15,
    NineteenMp: 15,
    NoAccounts: 15,
    NoBackpack: 15,
    NoCell: 15,
    NoDrinks: 15,
    NoEncryption: 15,
    NoFlash: 15,
    NoFood: 15,
    NoLuggage: 15,
    NoMeals: 15,
    NoMeetingRoom: 7,
    NoPhotography: 7,
    NoSim: 15,
    NoStroller: 15,
    NoTransfer: 15,
    NordicWalking: 7,
    North: 15,
    NorthEast: 15,
    NorthWest: 15,
    NotAccessible: 7,
    NotInterested: 7,
    NotListedLocation: 0,
    NotStarted: 15,
    Note: 15,
    NoteAdd: 15,
    NoteAlt: 15,
    Notes: 15,
    NotificationAdd: 2,
    Notifications: 7,
    NotificationsActive: 0,
    NotificationsNone: 0,
    NotificationsOff: 0,
    NotificationsPaused: 0,
    OfflineBolt: 15,
    OfflinePin: 15,
    OfflineShare: 15,
    OndemandVideo: 7,
    OneK: 15,
    OneKPlus: 15,
    OneKk: 15,
    OnlinePrediction: 0,
    Opacity: 15,
    OpenInBrowser: 7,
    OpenInFull: 15,
    OpenInNew: 15,
    OpenInNewOff: 15,
    OpenWith: 15,
    OtherHouses: 15,
    Outbound: 15,
    Outbox: 15,
    OutdoorGrill: 15,
    Outlet: 15,
    Padding: 15,
    Pages: 15,
    Pageview: 15,
    Paid: 15,
    Palette: 15,
    PanTool: 15,
    Panorama: 15,
    PanoramaFishEye: 2,
    PanoramaHorizontal: 0,
    PanoramaPhotosphere: 0,
    PanoramaVertical: 0,
    PanoramaWideAngle: 0,
    Paragliding: 15,
    Park: 15,
    PartyMode: 15,
    Password: 15,
    Pattern: 15,
    Pause: 15,
    PauseCircle: 15,
    PauseCircleFilled: 0,
    PauseCircleOutline: 0,
    PausePresentation: 0,
    Payment: 15,
    Payments: 15,
    PedalBike: 15,
    Pending: 15,
    PendingActions: 2,
    People: 15,
    PeopleAlt: 15,
    PeopleOutline: 7,
    PermCameraMic: 7,
    PermContactCalendar: 0,
    PermDataSetting: 2,
    PermIdentity: 15,
    PermMedia: 15,
    PermPhoneMsg: 15,
    PermScanWifi: 15,
    Person: 15,
    PersonAdd: 15,
    PersonAddAlt: 15,
    PersonAddAlt1: 7,
    PersonAddDisabled: 0,
    PersonOff: 15,
    PersonOutline: 7,
    PersonPin: 15,
    PersonPinCircle: 2,
    PersonRemove: 15,
    PersonRemoveAlt1: 0,
    PersonSearch: 15,
    PersonalVideo: 7,
    PestControl: 15,
    PestControlRodent: 0,
    Pets: 15,
    Phone: 15,
    PhoneAndroid: 15,
    PhoneCallback: 7,
    PhoneDisabled: 7,
    PhoneEnabled: 15,
    PhoneForwarded: 2,
    PhoneInTalk: 15,
    PhoneIphone: 15,
    PhoneLocked: 15,
    PhoneMissed: 15,
    PhonePaused: 15,
    Phonelink: 15,
    PhonelinkErase: 2,
    PhonelinkLock: 7,
    PhonelinkOff: 15,
    PhonelinkRing: 7,
    PhonelinkSetup: 2,
    Photo: 15,
    PhotoAlbum: 15,
    PhotoCamera: 15,
    PhotoCameraBack: 2,
    PhotoCameraFront: 0,
    PhotoFilter: 15,
    PhotoLibrary: 15,
    PhotoSizeSelectLarge: 0,
    PhotoSizeSelectSmall: 0,
    Piano: 15,
    PianoOff: 15,
    PictureAsPdf: 15,
    PictureInPicture: 0,
    PictureInPictureAlt: 0,
    PieChart: 15,
    PieChartOutline: 2,
    Pin: 15,
    PinDrop: 15,
    Pinterest: 0,
    PivotTableChart: 2,
    Place: 15,
    Plagiarism: 15,
    PlayArrow: 15,
    PlayCircle: 15,
    PlayCircleFilled: 0,
    PlayCircleOutline: 0,
    PlayDisabled: 15,
    PlayForWork: 15,
    PlayLesson: 15,
    PlaylistAdd: 15,
    PlaylistAddCheck: 0,
    PlaylistPlay: 15,
    Plumbing: 15,
    PlusOne: 15,
    Podcasts: 15,
    PointOfSale: 15,
    Policy: 15,
    Poll: 15,
    Pool: 15,
    PortableWifiOff: 2,
    Portrait: 15,
    PostAdd: 15,
    Power: 15,
    PowerInput: 15,
    PowerOff: 15,
    PowerSettingsNew: 0,
    PregnantWoman: 7,
    PresentToAll: 15,
    Preview: 15,
    PriceChange: 15,
    PriceCheck: 15,
    Print: 15,
    PrintDisabled: 7,
    PriorityHigh: 15,
    PrivacyTip: 15,
    Psychology: 15,
    Public: 15,
    PublicOff: 15,
    Publish: 15,
    PublishedWithChanges: 0,
    PushPin: 15,
    QrCode: 15,
    QrCode2: 15,
    QrCodeScanner: 7,
    QueryBuilder: 15,
    QueryStats: 15,
    QuestionAnswer: 2,
    Queue: 15,
    QueueMusic: 15,
    QueuePlayNext: 7,
    Quickreply: 15,
    Quiz: 15,
    RMobiledata: 15,
    Radar: 15,
    Radio: 15,
    RadioButtonChecked: 0,
    RadioButtonUnchecked: 0,
    RailwayAlert: 15,
    RamenDining: 15,
    RateReview: 15,
    RawOff: 15,
    RawOn: 15,
    ReadMore: 15,
    Receipt: 15,
    ReceiptLong: 15,
    RecentActors: 15,
    Recommend: 15,
    RecordVoiceOver: 2,
    Reddit: 0,
    Redeem: 15,
    Redo: 15,
    ReduceCapacity: 2,
    Refresh: 15,
    RememberMe: 15,
    Remove: 15,
    RemoveCircle: 15,
    RemoveCircleOutline: 0,
    RemoveDone: 15,
    RemoveFromQueue: 2,
    RemoveModerator: 2,
    RemoveRedEye: 15,
    RemoveShoppingCart: 0,
    Reorder: 15,
    Repeat: 15,
    RepeatOn: 15,
    RepeatOne: 15,
    RepeatOneOn: 15,
    Replay: 15,
    Replay10: 15,
    Replay30: 15,
    Replay5: 15,
    ReplayCircleFilled: 0,
    Reply: 15,
    ReplyAll: 15,
    Report: 15,
    ReportGmailerrorred: 0,
    ReportOff: 15,
    ReportProblem: 7,
    RequestPage: 15,
    RequestQuote: 15,
    ResetTv: 15,
    RestartAlt: 15,
    Restaurant: 15,
    RestaurantMenu: 2,
    Restore: 15,
    RestoreFromTrash: 0,
    RestorePage: 15,
    Reviews: 15,
    RiceBowl: 15,
    RingVolume: 15,
    Roofing: 15,
    Room: 15,
    RoomPreferences: 2,
    RoomService: 15,
    Rotate90DegreesCcw: 0,
    RotateLeft: 15,
    RotateRight: 15,
    Router: 15,
    Rowing: 15,
    RssFeed: 15,
    Rsvp: 15,
    Rtt: 15,
    Rule: 15,
    RuleFolder: 15,
    RunCircle: 15,
    RunningWithErrors: 0,
    RvHookup: 15,
    SafetyDivider: 7,
    Sailing: 15,
    Sanitizer: 15,
    Satellite: 15,
    Save: 15,
    SaveAlt: 15,
    SavedSearch: 15,
    Savings: 15,
    Scanner: 15,
    ScatterPlot: 15,
    Schedule: 15,
    ScheduleSend: 15,
    Schema: 15,
    School: 15,
    Science: 15,
    Score: 15,
    ScreenLockLandscape: 0,
    ScreenLockPortrait: 0,
    ScreenLockRotation: 0,
    ScreenRotation: 2,
    ScreenSearchDesktop: 0,
    ScreenShare: 15,
    Screenshot: 15,
    Sd: 15,
    SdCard: 15,
    SdCardAlert: 15,
    SdStorage: 15,
    Search: 15,
    SearchOff: 15,
    Security: 15,
    SecurityUpdate: 2,
    SecurityUpdateGood: 0,
    Segment: 15,
    SelectAll: 15,
    SelfImprovement: 2,
    Sell: 15,
    Send: 15,
    SendAndArchive: 2,
    SendToMobile: 15,
    SensorDoor: 15,
    SensorWindow: 15,
    Sensors: 15,
    SensorsOff: 15,
    SentimentNeutral: 0,
    SentimentSatisfied: 0,
    SetMeal: 15,
    Settings: 15,
    SettingsApplications: 0,
    SettingsBluetooth: 0,
    SettingsBrightness: 0,
    SettingsCell: 15,
    SettingsEthernet: 0,
    SettingsInputAntenna: 0,
    SettingsInputHdmi: 0,
    SettingsInputSvideo: 0,
    SettingsOverscan: 0,
    SettingsPhone: 7,
    SettingsPower: 7,
    SettingsRemote: 2,
    SettingsSuggest: 2,
    SettingsVoice: 7,
    SevenK: 15,
    SevenKPlus: 15,
    SevenMp: 15,
    SeventeenMp: 15,
    Share: 15,
    ShareLocation: 7,
    Shield: 15,
    Shop: 15,
    Shop2: 15,
    ShopTwo: 15,
    ShoppingBag: 15,
    ShoppingBasket: 2,
    ShoppingCart: 15,
    ShortText: 15,
    Shortcut: 15,
    ShowChart: 15,
    Shower: 15,
    Shuffle: 15,
    ShuffleOn: 15,
    ShutterSpeed: 15,
    Sick: 15,
    SignalCellular0Bar: 0,
    SignalCellular1Bar: 0,
    SignalCellular2Bar: 0,
    SignalCellular3Bar: 0,
    SignalCellular4Bar: 0,
    SignalCellularAlt: 0,
    SignalCellularNoSim: 0,
    SignalCellularNodata: 0,
    SignalCellularNull: 0,
    SignalCellularOff: 0,
    SignalWifi0Bar: 2,
    SignalWifi1Bar: 2,
    SignalWifi1BarLock: 0,
    SignalWifi2Bar: 2,
    SignalWifi2BarLock: 0,
    SignalWifi3Bar: 2,
    SignalWifi3BarLock: 0,
    SignalWifi4Bar: 2,
    SignalWifi4BarLock: 0,
    SignalWifiBad: 7,
    SignalWifiOff: 7,
    SimCard: 15,
    SimCardAlert: 15,
    SimCardDownload: 2,
    SingleBed: 15,
    Sip: 15,
    SixK: 15,
    SixKPlus: 15,
    SixMp: 15,
    SixteenMp: 15,
    SixtyFps: 15,
    SixtyFpsSelect: 2,
    Skateboarding: 7,
    SkipNext: 15,
    SkipPrevious: 15,
    Sledding: 15,
    Slideshow: 15,
    SlowMotionVideo: 2,
    SmartButton: 15,
    SmartDisplay: 15,
    SmartScreen: 15,
    SmartToy: 15,
    Smartphone: 15,
    SmokeFree: 15,
    SmokingRooms: 15,
    Sms: 15,
    SmsFailed: 15,
    SnippetFolder: 7,
    Snooze: 15,
    Snowboarding: 15,
    Snowmobile: 15,
    Snowshoeing: 15,
    Soap: 15,
    SocialDistance: 2,
    Sort: 15,
    SortByAlpha: 15,
    Source: 15,
    South: 15,
    SouthEast: 15,
    SouthWest: 15,
    Spa: 15,
    SpaceBar: 15,
    Speaker: 15,
    SpeakerGroup: 15,
    SpeakerNotes: 15,
    SpeakerNotesOff: 2,
    SpeakerPhone: 15,
    Speed: 15,
    Spellcheck: 15,
    Splitscreen: 15,
    Sports: 15,
    SportsBar: 15,
    SportsBaseball: 2,
    SportsBasketball: 0,
    SportsCricket: 7,
    SportsEsports: 7,
    SportsFootball: 2,
    SportsGolf: 15,
    SportsHandball: 2,
    SportsHockey: 15,
    SportsKabaddi: 7,
    SportsMma: 15,
    SportsMotorsports: 0,
    SportsRugby: 15,
    SportsScore: 15,
    SportsSoccer: 15,
    SportsTennis: 15,
    SportsVolleyball: 0,
    SquareFoot: 15,
    StackedBarChart: 2,
    StackedLineChart: 0,
    Stairs: 15,
    Star: 15,
    StarBorder: 15,
    StarBorderPurple500: 0,
    StarHalf: 15,
    StarOutline: 15,
    StarPurple500: 7,
    StarRate: 15,
    Stars: 15,
    StayCurrentLandscape: 0,
    StayCurrentPortrait: 0,
    StayPrimaryLandscape: 0,
    StayPrimaryPortrait: 0,
    StickyNote2: 15,
    Stop: 15,
    StopCircle: 15,
    StopScreenShare: 2,
    Storage: 15,
    Store: 15,
    StoreMallDirectory: 0,
    Storefront: 15,
    Storm: 15,
    Straighten: 15,
    Stream: 15,
    Streetview: 15,
    StrikethroughS: 2,
    Stroller: 15,
    Style: 15,
    Subject: 15,
    Subscript: 15,
    Subscriptions: 7,
    Subtitles: 15,
    SubtitlesOff: 15,
    Subway: 15,
    Summarize: 15,
    Superscript: 15,
    SupervisedUserCircle: 0,
    SupervisorAccount: 0,
    Support: 15,
    SupportAgent: 15,
    Surfing: 15,
    SurroundSound: 7,
    SwapCalls: 15,
    SwapHoriz: 15,
    SwapHorizontalCircle: 0,
    SwapVert: 15,
    SwapVerticalCircle: 0,
    Swipe: 15,
    SwitchAccount: 7,
    SwitchCamera: 15,
    SwitchLeft: 15,
    SwitchRight: 15,
    SwitchVideo: 15,
    Sync: 15,
    SyncAlt: 15,
    SyncDisabled: 15,
    SyncProblem: 15,
    SystemSecurityUpdate: 0,
    SystemUpdate: 15,
    SystemUpdateAlt: 2,
    Tab: 15,
    TabUnselected: 7,
    TableChart: 15,
    TableRows: 15,
    TableView: 15,
    Tablet: 15,
    TabletAndroid: 7,
    TabletMac: 15,
    Tag: 15,
    TagFaces: 15,
    TakeoutDining: 7,
    TapAndPlay: 15,
    Tapas: 15,
    Task: 15,
    TaskAlt: 15,
    TaxiAlert: 15,
    Telegram: 0,
    TenMp: 15,
    Terrain: 15,
    TextFields: 15,
    TextFormat: 15,
    TextRotateUp: 15,
    TextRotateVertical: 0,
    TextRotationAngleup: 0,
    TextRotationDown: 0,
    TextRotationNone: 0,
    TextSnippet: 15,
    Textsms: 15,
    Texture: 15,
    TheaterComedy: 7,
    Theaters: 15,
    Thermostat: 15,
    ThermostatAuto: 2,
    ThirteenMp: 15,
    ThirtyFps: 15,
    ThirtyFpsSelect: 2,
    ThreeDRotation: 2,
    ThreeGMobiledata: 0,
    ThreeK: 15,
    ThreeKPlus: 15,
    ThreeMp: 15,
    ThreeP: 15,
    ThreeSixty: 15,
    ThumbDown: 15,
    ThumbDownAlt: 15,
    ThumbDownOffAlt: 2,
    ThumbUp: 15,
    ThumbUpAlt: 15,
    ThumbUpOffAlt: 7,
    ThumbsUpDown: 15,
    TimeToLeave: 15,
    Timelapse: 15,
    Timeline: 15,
    Timer: 15,
    Timer10: 15,
    Timer10Select: 7,
    Timer3: 15,
    Timer3Select: 15,
    TimerOff: 15,
    TimesOneMobiledata: 0,
    Title: 15,
    Toc: 15,
    Today: 15,
    ToggleOff: 15,
    ToggleOn: 15,
    Toll: 15,
    Tonality: 15,
    Topic: 15,
    TouchApp: 15,
    Tour: 15,
    Toys: 15,
    TrackChanges: 15,
    Traffic: 15,
    Train: 15,
    Tram: 15,
    Transform: 15,
    Transgender: 15,
    TransitEnterexit: 0,
    Translate: 15,
    TravelExplore: 7,
    TrendingDown: 15,
    TrendingFlat: 15,
    TrendingUp: 15,
    TripOrigin: 15,
    Try: 15,
    Tty: 15,
    Tune: 15,
    Tungsten: 15,
    TurnedIn: 15,
    TurnedInNot: 15,
    Tv: 15,
    TvOff: 15,
    TwelveMp: 15,
    TwentyFourMp: 15,
    TwentyOneMp: 15,
    TwentyThreeMp: 7,
    TwentyTwoMp: 15,
    TwentyZeroMp: 15,
    Twitter: 0,
    TwoK: 15,
    TwoKPlus: 15,
    TwoMp: 15,
    TwoWheeler: 15,
    Umbrella: 15,
    Unarchive: 15,
    Undo: 15,
    UnfoldLess: 15,
    UnfoldMore: 15,
    Unpublished: 15,
    Unsubscribe: 15,
    Upcoming: 15,
    Update: 15,
    UpdateDisabled: 2,
    Upgrade: 15,
    Upload: 15,
    UploadFile: 15,
    Usb: 15,
    UsbOff: 15,
    Verified: 15,
    VerifiedUser: 15,
    VerticalAlignBottom: 0,
    VerticalAlignCenter: 0,
    VerticalAlignTop: 0,
    VerticalSplit: 7,
    Vibration: 15,
    VideoCall: 15,
    VideoCameraBack: 2,
    VideoCameraFront: 0,
    VideoLabel: 15,
    VideoLibrary: 15,
    VideoSettings: 7,
    VideoStable: 15,
    Videocam: 15,
    VideocamOff: 15,
    VideogameAsset: 2,
    VideogameAssetOff: 0,
    ViewAgenda: 15,
    ViewArray: 15,
    ViewCarousel: 15,
    ViewColumn: 15,
    ViewComfy: 15,
    ViewCompact: 15,
    ViewDay: 15,
    ViewHeadline: 15,
    ViewInAr: 15,
    ViewList: 15,
    ViewModule: 15,
    ViewQuilt: 15,
    ViewSidebar: 15,
    ViewStream: 15,
    ViewWeek: 15,
    Vignette: 15,
    Villa: 15,
    Visibility: 15,
    VisibilityOff: 7,
    VoiceChat: 15,
    VoiceOverOff: 15,
    Voicemail: 15,
    VolumeDown: 15,
    VolumeMute: 15,
    VolumeOff: 15,
    VolumeUp: 15,
    VolunteerActivism: 0,
    VpnKey: 15,
    VpnLock: 15,
    Vrpano: 15,
    Wallpaper: 15,
    Warning: 15,
    WarningAmber: 15,
    Wash: 15,
    Watch: 15,
    WatchLater: 15,
    Water: 15,
    WaterDamage: 15,
    WaterfallChart: 2,
    Waves: 15,
    WbAuto: 15,
    WbCloudy: 15,
    WbIncandescent: 2,
    WbIridescent: 15,
    WbShade: 15,
    WbSunny: 15,
    WbTwilight: 15,
    Wc: 15,
    Web: 15,
    WebAsset: 15,
    WebAssetOff: 15,
    Weekend: 15,
    West: 15,
    WhatsApp: 0,
    Whatshot: 15,
    WheelchairPickup: 0,
    WhereToVote: 15,
    Widgets: 15,
    Wifi: 15,
    WifiCalling: 15,
    WifiCalling3: 15,
    WifiLock: 15,
    WifiOff: 15,
    WifiProtectedSetup: 0,
    WifiTethering: 7,
    WifiTetheringOff: 0,
    Window: 15,
    WineBar: 15,
    Work: 15,
    WorkOff: 15,
    WorkOutline: 15,
    Workspaces: 15,
    WrapText: 15,
    WrongLocation: 7,
    Wysiwyg: 15,
    Yard: 15,
    YouTube: 0,
    YoutubeSearchedFor: 0,
    ZoomIn: 15,
    ZoomOut: 15,
    ZoomOutMap: 15,
  },
  Gt = Object.keys(Ut),
  Go = ["Filled", "TwoTone", "Sharp", "Rounded", "Outlined"],
  Pr = {
    15: [...Go],
    7: ["Filled", "TwoTone", "Sharp", "Rounded"],
    2: ["Filled", "Sharp"],
  },
  qo = Object.keys(Pr).map((t) => `iconStyle${t}`),
  ra = Gt.reduce((t, n) => ((t[n.toLowerCase()] = n), t), {});
function Ie(t) {
  let {
      color: n,
      selectByList: o,
      iconSearch: i,
      iconSelection: c,
      onClick: f,
      onMouseDown: u,
      onMouseUp: m,
      onMouseEnter: y,
      onMouseLeave: h,
      mirrored: O,
      style: S,
    } = t,
    F = re(!1),
    L = ta(Gt, o, i, c, ra),
    p = qo.map((E) => t[E]),
    v = de(() => {
      let E = Ut[L];
      if (!E) return;
      let R = t[`iconStyle${E}`];
      if (R !== "Filled") return R;
    }, [...p]),
    [g, x] = Ne(L === "Home" ? Jn(Ue) : null);
  async function d() {
    if (typeof Ut[L] != "number") {
      x(null);
      return;
    }
    try {
      let k = await import(`${Uo}${L}${v || ""}.js@0.0.32`);
      F.current && x(k.default(Ue));
    } catch {
      F.current && x(null);
    }
  }
  le(
    () => (
      (F.current = !0),
      d(),
      () => {
        F.current = !1;
      }
    ),
    [L, ...p]
  );
  let A = Le.current() === Le.canvas ? r(Kn, {}) : null;
  return r(J.div, {
    style: { display: "contents" },
    onClick: f,
    onMouseEnter: y,
    onMouseLeave: h,
    onMouseDown: u,
    onMouseUp: m,
    children: g
      ? r("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: n,
            flexShrink: 0,
            transform: O ? "scale(-1, 1)" : void 0,
            ...S,
          },
          focusable: "false",
          viewBox: "0 0 24 24",
          color: n,
          children: g,
        })
      : A,
  });
}
Ie.displayName = "Material";
Ie.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "Home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  weight: "Filled",
  mirrored: !1,
};
function $o(t, n) {
  let { selectByList: o, iconSearch: i, iconSelection: c } = t,
    f = parseInt(n),
    u = ea(Gt, o, i, c, ra),
    m = Ut[u];
  return !m || f === 0 ? !0 : m !== f;
}
je(Ie, {
  selectByList: {
    type: b.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Ie.defaultProps.selectByList,
  },
  iconSelection: {
    type: b.Enum,
    options: Gt,
    defaultValue: Ie.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: t }) => !t,
    description:
      "Find every icon name on the [Material site](https://fonts.google.com/icons)",
  },
  iconSearch: {
    type: b.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: t }) => t,
  },
  mirrored: {
    type: b.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Ie.defaultProps.mirrored,
  },
  color: { type: b.Color, title: "Color", defaultValue: Ie.defaultProps.color },
  ...Object.keys(Pr).reduce(
    (t, n) => (
      (t[`iconStyle${n}`] = {
        type: b.Enum,
        title: "Style",
        defaultValue: "Filled",
        options: Pr[n],
        hidden: (o) => $o(o, n),
      }),
      t
    ),
    {}
  ),
  ...Qn,
});
var Ct = (t) => t;
var qt = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function Mr(t, n) {
  return n ? t * (1e3 / n) : 0;
}
var na = (t, n, o) =>
    (((1 - 3 * o + 3 * n) * t + (3 * o - 6 * n)) * t + 3 * n) * t,
  Ko = 1e-7,
  Jo = 12;
function Qo(t, n, o, i, c) {
  let f,
    u,
    m = 0;
  do (u = n + (o - n) / 2), (f = na(u, i, c) - t), f > 0 ? (o = u) : (n = u);
  while (Math.abs(f) > Ko && ++m < Jo);
  return u;
}
function _t(t, n, o, i) {
  if (t === n && o === i) return Ct;
  let c = (f) => Qo(f, 0, 1, t, o);
  return (f) => (f === 0 || f === 1 ? f : na(c(f), n, i));
}
var Bl = {
  ease: _t(0.25, 0.1, 0.25, 1),
  "ease-in": _t(0.42, 0, 1, 1),
  "ease-in-out": _t(0.42, 0, 0.58, 1),
  "ease-out": _t(0, 0, 0.58, 1),
};
function aa(t, n) {
  var o = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      n.indexOf(i) < 0 &&
      (o[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var c = 0;
    for (i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      n.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]]);
  }
  return o;
}
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.warning = function () {};
ut.invariant = function () {};
var Yl = ut.__esModule,
  Ul = ut.warning,
  ni = ut.invariant;
var ai = 5;
function $t(t, n, o) {
  let i = Math.max(n - ai, 0);
  return Mr(o - t(i), n - i);
}
var dt = { stiffness: 100, damping: 10, mass: 1 },
  oi = (t = dt.stiffness, n = dt.damping, o = dt.mass) =>
    n / (2 * Math.sqrt(t * o));
function ii(t, n, o) {
  return (t < n && o >= n) || (t > n && o <= n);
}
var Ir = ({
    stiffness: t = dt.stiffness,
    damping: n = dt.damping,
    mass: o = dt.mass,
    from: i = 0,
    to: c = 1,
    velocity: f = 0,
    restSpeed: u = 2,
    restDistance: m = 0.5,
  } = {}) => {
    f = f ? qt.s(f) : 0;
    let y = { done: !1, hasReachedTarget: !1, current: i, target: c },
      h = c - i,
      O = Math.sqrt(t / o) / 1e3,
      S = oi(t, n, o),
      F;
    if (S < 1) {
      let L = O * Math.sqrt(1 - S * S);
      F = (p) =>
        c -
        Math.exp(-S * O * p) *
          (((S * O * h - f) / L) * Math.sin(L * p) + h * Math.cos(L * p));
    } else F = (L) => c - Math.exp(-O * L) * (h + (O * h - f) * L);
    return (L) => {
      y.current = F(L);
      let p = L === 0 ? f : $t(F, L, y.current),
        v = Math.abs(p) <= u,
        g = Math.abs(c - y.current) <= m;
      return (y.done = v && g), (y.hasReachedTarget = ii(i, c, y.current)), y;
    };
  },
  oa = ({
    from: t = 0,
    velocity: n = 0,
    power: o = 0.8,
    decay: i = 0.325,
    bounceDamping: c,
    bounceStiffness: f,
    changeTarget: u,
    min: m,
    max: y,
    restDistance: h = 0.5,
    restSpeed: O,
  }) => {
    i = qt.ms(i);
    let S = { hasReachedTarget: !1, done: !1, current: t, target: t },
      F = (k) => (m !== void 0 && k < m) || (y !== void 0 && k > y),
      L = (k) =>
        m === void 0
          ? y
          : y === void 0 || Math.abs(m - k) < Math.abs(y - k)
          ? m
          : y,
      p = o * n,
      v = t + p,
      g = u === void 0 ? v : u(v);
    (S.target = g), g !== v && (p = g - t);
    let x = (k) => -p * Math.exp(-k / i),
      d = (k) => g + x(k),
      C = (k) => {
        let H = x(k),
          ne = d(k);
        (S.done = Math.abs(H) <= h), (S.current = S.done ? g : ne);
      },
      A,
      E,
      R = (k) => {
        F(S.current) &&
          ((A = k),
          (E = Ir({
            from: S.current,
            to: L(S.current),
            velocity: $t(d, k, S.current),
            damping: c,
            stiffness: f,
            restDistance: h,
            restSpeed: O,
          })));
      };
    return (
      R(0),
      (k) => {
        let H = !1;
        return (
          !E && A === void 0 && ((H = !0), C(k), R(k)),
          A !== void 0 && k > A
            ? ((S.hasReachedTarget = !0), E(k - A))
            : ((S.hasReachedTarget = !1), !H && C(k), S)
        );
      }
    );
  },
  Lr = 10,
  si = 1e4;
function ia(t) {
  let n,
    o = Lr,
    i = t(0),
    c = [i.current];
  for (; !i.done && o < si; )
    (i = t(o)),
      c.push(i.done ? i.target : i.current),
      n === void 0 && i.hasReachedTarget && (n = o),
      (o += Lr);
  let f = o - Lr;
  return (
    c.length === 1 && c.push(i.current),
    { keyframes: c, duration: f / 1e3, overshootDuration: (n ?? f) / 1e3 }
  );
}
var li = ["", "X", "Y", "Z"],
  ci = ["translate", "scale", "rotate", "skew"];
var sa = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  fi = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: sa,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Ct },
    skew: sa,
  },
  ui = new Map(),
  di = (t) => `--motion-${t}`,
  da = ["x", "y", "z"];
ci.forEach((t) => {
  li.forEach((n) => {
    da.push(t + n), ui.set(di(t + n), fi[t]);
  });
});
var vc = new Set(da);
var la = (t) => document.createElement("div").animate(t, { duration: 0.001 }),
  ca = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        la({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!la({ opacity: [0, 1] }).finished,
  },
  Hr = {},
  pi = {};
for (let t in ca) pi[t] = () => (Hr[t] === void 0 && (Hr[t] = ca[t]()), Hr[t]);
function pa(t, n) {
  var o;
  return (
    typeof t == "string"
      ? n
        ? (((o = n[t]) !== null && o !== void 0) ||
            (n[t] = document.querySelectorAll(t)),
          (t = n[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
function ma(t) {
  let n = new WeakMap();
  return (o = {}) => {
    let i = new Map(),
      c = (u = 0, m = 100, y = 0, h = !1) => {
        let O = `${u}-${m}-${y}-${h}`;
        return (
          i.has(O) ||
            i.set(
              O,
              t(
                Object.assign(
                  {
                    from: u,
                    to: m,
                    velocity: y,
                    restSpeed: h ? 0.05 : 2,
                    restDistance: h ? 0.01 : 0.5,
                  },
                  o
                )
              )
            ),
          i.get(O)
        );
      },
      f = (u) => (n.has(u) || n.set(u, ia(u)), n.get(u));
    return {
      createAnimation: (u, m, y, h, O) => {
        var S, F;
        let L,
          p = u.length;
        if (y && p <= 2 && u.every(mi)) {
          let g = u[p - 1],
            x = p === 1 ? null : u[0],
            d = 0,
            C = 0,
            A = O?.generator;
          if (A) {
            let { animation: k, generatorStartTime: H } = O,
              ne = k?.startTime || H || 0,
              Y = k?.currentTime || performance.now() - ne,
              ge = A(Y).current;
            (C = (S = x) !== null && S !== void 0 ? S : ge),
              (p === 1 || (p === 2 && u[0] === null)) &&
                (d = $t((Oe) => A(Oe).current, Y, ge));
          } else C = (F = x) !== null && F !== void 0 ? F : parseFloat(m());
          let E = c(C, g, d, h?.includes("scale")),
            R = f(E);
          (L = Object.assign(Object.assign({}, R), { easing: "linear" })),
            O &&
              ((O.generator = E), (O.generatorStartTime = performance.now()));
        } else L = { easing: "ease", duration: f(c(0, 100)).overshootDuration };
        return L;
      },
    };
  };
}
var mi = (t) => typeof t != "string",
  wc = ma(Ir),
  bc = ma(oa),
  hi = { any: 0, all: 1 };
function gi(t, n, { root: o, margin: i, amount: c = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let f = pa(t),
    u = new WeakMap(),
    m = (h) => {
      h.forEach((O) => {
        let S = u.get(O.target);
        if (O.isIntersecting !== !!S)
          if (O.isIntersecting) {
            let F = n(O);
            typeof F == "function" ? u.set(O.target, F) : y.unobserve(O.target);
          } else S && (S(O), u.delete(O.target));
      });
    },
    y = new IntersectionObserver(m, {
      root: o,
      rootMargin: i,
      threshold: typeof c == "number" ? c : hi[c],
    });
  return f.forEach((h) => y.observe(h)), () => y.disconnect();
}
var Kt = new WeakMap(),
  qe;
function yi(t, n) {
  if (n) {
    let { inlineSize: o, blockSize: i } = n[0];
    return { width: o, height: i };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function vi({ target: t, contentRect: n, borderBoxSize: o }) {
  var i;
  (i = Kt.get(t)) === null ||
    i === void 0 ||
    i.forEach((c) => {
      c({
        target: t,
        contentSize: n,
        get size() {
          return yi(t, o);
        },
      });
    });
}
function wi(t) {
  t.forEach(vi);
}
function bi() {
  typeof ResizeObserver < "u" && (qe = new ResizeObserver(wi));
}
function xi(t, n) {
  qe || bi();
  let o = pa(t);
  return (
    o.forEach((i) => {
      let c = Kt.get(i);
      c || ((c = new Set()), Kt.set(i, c)), c.add(n), qe?.observe(i);
    }),
    () => {
      o.forEach((i) => {
        let c = Kt.get(i);
        c?.delete(n), c?.size || qe?.unobserve(i);
      });
    }
  );
}
var Jt = new Set(),
  St;
function Ci() {
  (St = () => {
    let t = { width: j.innerWidth, height: j.innerHeight },
      n = { target: j, size: t, contentSize: t };
    Jt.forEach((o) => o(n));
  }),
    j.addEventListener("resize", St);
}
function _i(t) {
  return (
    Jt.add(t),
    St || Ci(),
    () => {
      Jt.delete(t), !Jt.size && St && (St = void 0);
    }
  );
}
function ha(t, n) {
  return typeof t == "function" ? _i(t) : xi(t, n);
}
function Vr(t, n, o) {
  t.dispatchEvent(new CustomEvent(n, { detail: { originalEvent: o } }));
}
function fa(t, n, o) {
  t.dispatchEvent(new CustomEvent(n, { detail: { originalEntry: o } }));
}
var Si = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: n, disable: o }, { inViewOptions: i = {} }) => {
      let { once: c } = i,
        f = aa(i, ["once"]);
      return gi(
        t,
        (u) => {
          if ((n(), fa(t, "viewenter", u), !c))
            return (m) => {
              o(), fa(t, "viewleave", m);
            };
        },
        f
      );
    },
  },
  ua = (t, n, o) => (i) => {
    (!i.pointerType || i.pointerType === "mouse") && (o(), Vr(t, n, i));
  },
  Ai = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: n, disable: o }) => {
      let i = ua(t, "hoverstart", n),
        c = ua(t, "hoverend", o);
      return (
        t.addEventListener("pointerenter", i),
        t.addEventListener("pointerleave", c),
        () => {
          t.removeEventListener("pointerenter", i),
            t.removeEventListener("pointerleave", c);
        }
      );
    },
  },
  ki = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: n, disable: o }) => {
      let i = (f) => {
          o(), Vr(t, "pressend", f), j.removeEventListener("pointerup", i);
        },
        c = (f) => {
          n(), Vr(t, "pressstart", f), j.addEventListener("pointerup", i);
        };
      return (
        t.addEventListener("pointerdown", c),
        () => {
          t.removeEventListener("pointerdown", c),
            j.removeEventListener("pointerup", i);
        }
      );
    },
  },
  Ti = { inView: Si, hover: Ai, press: ki },
  xc = ["initial", "animate", ...Object.keys(Ti), "exit"];
var Oi = 100,
  Ei = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  Xr =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function be(t) {
  let {
      slots: n,
      gap: o,
      padding: i,
      paddingPerSide: c,
      paddingTop: f,
      paddingRight: u,
      paddingBottom: m,
      paddingLeft: y,
      speed: h,
      hoverFactor: O,
      direction: S,
      alignment: F,
      sizingOptions: L,
      fadeOptions: p,
      style: v,
    } = t,
    {
      fadeContent: g,
      overflow: x,
      fadeWidth: d,
      fadeInset: C,
      fadeAlpha: A,
    } = p,
    { widthType: E, heightType: R } = L,
    k = c ? `${f}px ${u}px ${m}px ${y}px` : `${i}px`,
    H = Le.current() === Le.canvas,
    ne = Xt.count(n),
    Y = ne > 0;
  S === !0 && (S = "left");
  let ge = S === "left" || S === "right",
    Oe = Hn(0),
    xe = Ei[S],
    ye = Vn(Oe, xe),
    V = re(null),
    _ = de(() => [kr(), kr()], []),
    [fe, ae] = Ne({ parent: null, children: null }),
    pe = [],
    ie = [],
    me = 0,
    Ce = 0;
  H && ((me = ne ? Math.floor(10 / ne) : 0), (Ce = 1)),
    !H &&
      Y &&
      fe.parent &&
      ((me = Math.round((fe.parent / fe.children) * 2) + 1),
      (me = Math.min(me, Oi)),
      (Ce = 1));
  let Pe = Je(() => {
      if (Y && V.current) {
        let G = ge ? V.current.offsetWidth : V.current.offsetHeight,
          q = _[0].current
            ? ge
              ? _[0].current.offsetLeft
              : _[0].current.offsetTop
            : 0,
          _e =
            (_[1].current
              ? ge
                ? _[1].current.offsetLeft + _[1].current.offsetWidth
                : _[1].current.offsetTop + _[1].current.offsetHeight
              : 0) -
            q +
            o;
        ae({ parent: G, children: _e });
      }
    }, []),
    Q = H ? { contentVisibility: "auto" } : {};
  if (Y) {
    if (!H) {
      let G = re(!0);
      le(
        () => (
          Er.read(Pe),
          ha(V.current, ({ contentSize: q }) => {
            !G.current && (q.width || q.height) && Er.read(Pe),
              (G.current = !1);
          })
        ),
        []
      );
    }
    pe = Xt.map(n, (G, q) => {
      var Re, _e, Me, Ve;
      let Xe;
      q === 0 && (Xe = _[0]), q === n.length - 1 && (Xe = _[1]);
      let Ye = {
        width: E
          ? (Re = G.props) === null || Re === void 0
            ? void 0
            : Re.width
          : "100%",
        height: R
          ? (_e = G.props) === null || _e === void 0
            ? void 0
            : _e.height
          : "100%",
      };
      return r(Qe, {
        inherit: "id",
        children: r("li", {
          ref: Xe,
          style: Ye,
          children: Ar(
            G,
            {
              style: {
                ...((Me = G.props) === null || Me === void 0
                  ? void 0
                  : Me.style),
                ...Ye,
                flexShrink: 0,
                ...Q,
              },
              layoutId: G.props.layoutId
                ? G.props.layoutId + "-original-" + q
                : void 0,
            },
            (Ve = G.props) === null || Ve === void 0 ? void 0 : Ve.children
          ),
        }),
      });
    });
  }
  if (!H)
    for (let G = 0; G < me; G++)
      ie = [
        ...ie,
        ...Xt.map(n, (q, Re) => {
          var _e, Me, Ve, Xe, Ye, vt;
          let pr = {
            width: E
              ? (_e = q.props) === null || _e === void 0
                ? void 0
                : _e.width
              : "100%",
            height: R
              ? (Me = q.props) === null || Me === void 0
                ? void 0
                : Me.height
              : "100%",
          };
          return r(
            Qe,
            {
              inherit: "id",
              children: r(
                "li",
                {
                  style: pr,
                  "aria-hidden": !0,
                  children: Ar(
                    q,
                    {
                      key: G + " " + Re,
                      style: {
                        ...((Ve = q.props) === null || Ve === void 0
                          ? void 0
                          : Ve.style),
                        width: E
                          ? (Xe = q.props) === null || Xe === void 0
                            ? void 0
                            : Xe.width
                          : "100%",
                        height: R
                          ? (Ye = q.props) === null || Ye === void 0
                            ? void 0
                            : Ye.height
                          : "100%",
                        flexShrink: 0,
                        ...Q,
                      },
                      layoutId: q.props.layoutId
                        ? q.props.layoutId + "-dupe-" + G
                        : void 0,
                    },
                    (vt = q.props) === null || vt === void 0
                      ? void 0
                      : vt.children
                  ),
                },
                G + "li" + Re
              ),
            },
            G + "lg" + Re
          );
        }),
      ];
  let ue = fe.children + fe.children * Math.round(fe.parent / fe.children),
    ze = re(null),
    He = re(null),
    Be = re(0),
    gt = re(!1),
    Ot = Bn(),
    Ke = re(null),
    We = re(null);
  if (!H) {
    let G = Nt(V);
    Xr
      ? le(() => {
          if (!(Ot || !ue || !h))
            return (
              (We.current = Ke.current.animate(
                { transform: [xe(0), xe(ue)] },
                {
                  duration: (Math.abs(ue) / h) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => We.current.cancel()
            );
        }, [O, ue, h])
      : Xn((q) => {
          if (!ue || Ot || Xr) return;
          ze.current === null && (ze.current = q), (q = q - ze.current);
          let _e = (He.current === null ? 0 : q - He.current) * (h / 1e3);
          gt.current && (_e *= O),
            (Be.current += _e),
            (Be.current = Nn(0, ue, Be.current)),
            (He.current = q),
            G && Oe.set(Be.current);
        });
  }
  let ur = ge ? "to right" : "to bottom",
    yt = d / 2,
    at = 100 - d / 2,
    dr = Mi(C, 0, yt),
    Et = 100 - C,
    Ee = `linear-gradient(${ur}, rgba(0, 0, 0, ${A}) ${dr}%, rgba(0, 0, 0, 1) ${yt}%, rgba(0, 0, 0, 1) ${at}%, rgba(0, 0, 0, ${A}) ${Et}%)`;
  return Y
    ? r("section", {
        style: {
          ...ga,
          opacity: Ce,
          WebkitMaskImage: g ? Ee : void 0,
          MozMaskImage: g ? Ee : void 0,
          maskImage: g ? Ee : void 0,
          overflow: x ? "visible" : "hidden",
          padding: k,
        },
        ref: V,
        children: K(J.ul, {
          ref: Ke,
          style: {
            ...ga,
            gap: o,
            top: S === "bottom" && ya(ue) ? -ue : void 0,
            left: S === "right" && ya(ue) ? -ue : void 0,
            placeItems: F,
            position: "relative",
            flexDirection: ge ? "row" : "column",
            ...v,
            transform: Xr ? void 0 : ye,
            willChange: H ? "auto" : "transform",
          },
          onMouseEnter: () => {
            (gt.current = !0), We.current && We.current.updatePlaybackRate(O);
          },
          onMouseLeave: () => {
            (gt.current = !1), We.current && We.current.updatePlaybackRate(1);
          },
          children: [pe, ie],
        }),
      })
    : K("section", {
        style: Ri,
        children: [
          r("div", { style: ji, children: "\u2728" }),
          r("p", { style: Fi, children: "Connect to Content" }),
          r("p", {
            style: Pi,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
be.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
je(be, {
  slots: {
    type: b.Array,
    title: "Children",
    control: { type: b.ComponentInstance },
  },
  speed: {
    type: b.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: b.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: b.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: b.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: b.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: b.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: b.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: b.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: b.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: b.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: b.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: b.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: b.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: b.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: b.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var ga = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Ri = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  ji = { fontSize: 32, marginBottom: 10 },
  Fi = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Pi = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Mi = (t, n, o) => Math.min(Math.max(t, n), o),
  ya = (t) => typeof t == "number" && !isNaN(t);
function Fe(t) {
  let {
      colors: n,
      radius: o,
      randomStart: i,
      animOptions: c,
      animRepeat: f,
      animPause: u,
    } = t,
    m = n;
  return (
    n.push(n[0]),
    i &&
      ((m = n
        .map((y) => ({ value: y, sort: Math.random() }))
        .sort((y, h) => y.sort - h.sort)
        .map(({ value: y }) => zt.toHslString(zt(y)))),
      m.push(m[0])),
    r(J.div, {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: m[0],
        borderRadius: o,
        willChange: "background-color",
      },
      animate: { backgroundColor: [...m] },
      transition: {
        ...c,
        repeat: f && 1 / 0,
        repeatType: f && "loop",
        repeatDelay: u,
      },
    })
  );
}
Fe.defaultProps = {
  radius: 0,
  colors: ["#0CF", "#2DD", "#F64", "#99F"],
  randomStart: !1,
  animOptions: { type: "tween", ease: [0, 0, 1, 1], duration: 1 },
  animRepeat: !0,
  animPause: 0,
};
Fe.displayName = "Color Cycle";
je(Fe, {
  radius: {
    type: b.Number,
    min: 0,
    max: 1e3,
    step: 1,
    displayStepper: !0,
    defaultValue: 0,
  },
  colors: {
    type: b.Array,
    control: { type: b.Color },
    defaultValue: Fe.defaultProps.colors,
  },
  animOptions: {
    type: b.Transition,
    title: "Transition",
    defaultValue: Fe.defaultProps.animOptions,
  },
  randomStart: {
    type: b.Boolean,
    title: "Randomize",
    defaultValue: Fe.defaultProps.randomStart,
  },
  animRepeat: {
    type: b.Boolean,
    title: "Repeat",
    defaultValue: Fe.defaultProps.animRepeat,
  },
  animPause: {
    type: b.Number,
    title: "Pause",
    min: 0,
    max: 10,
    displayStepper: !0,
    step: 1,
    defaultValue: Fe.defaultProps.animPause,
  },
});
var tt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Qt = {
    ...tt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Zt = {
    onClick: { type: b.EventHandler },
    onMouseEnter: { type: b.EventHandler },
    onMouseLeave: { type: b.EventHandler },
  },
  va = {
    type: b.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  wa = {
    font: {
      type: b.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: b.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: b.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
function er(t, n) {
  return ba(!0, t, n);
}
function tr(t, n) {
  return ba(!1, t, n);
}
function ba(t, n, o = !0) {
  let i = Wt();
  le(() => {
    o && i === t && n();
  }, [i]);
}
var Li = () => {
    if (typeof M < "u") {
      let t = M.userAgent.toLowerCase();
      return (
        (t.indexOf("safari") > -1 ||
          t.indexOf("framermobile") > -1 ||
          t.indexOf("framerx") > -1) &&
        t.indexOf("chrome") < 0
      );
    } else return !1;
  },
  rr = () => de(() => Li(), []);
function Dr() {
  return de(() => Le.current() === Le.canvas, []);
}
function nr(t) {
  let {
    borderRadius: n,
    isMixedBorderRadius: o,
    topLeftRadius: i,
    topRightRadius: c,
    bottomRightRadius: f,
    bottomLeftRadius: u,
  } = t;
  return de(
    () => (o ? `${i}px ${c}px ${f}px ${u}px` : `${n}px`),
    [n, o, i, c, f, u]
  );
}
var ar = {
  borderRadius: {
    title: "Radius",
    type: b.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var Ca = {
  padding: {
    type: b.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var $e;
(function (t) {
  (t.Fill = "fill"),
    (t.Contain = "contain"),
    (t.Cover = "cover"),
    (t.None = "none"),
    (t.ScaleDown = "scale-down");
})($e || ($e = {}));
var De;
(function (t) {
  (t.Video = "Upload"), (t.Url = "URL");
})(De || (De = {}));
function Ji(t) {
  let {
    width: n,
    height: o,
    topLeft: i,
    topRight: c,
    bottomRight: f,
    bottomLeft: u,
    id: m,
    children: y,
    ...h
  } = t;
  return h;
}
function pt(t) {
  let n = Ji(t);
  return r(es, { ...n });
}
function Qi(t) {
  let n = Wt(),
    o = re(!1),
    i = Je((u) => {
      if (!t.current) return;
      let m = (u === 1 ? 0.999 : u) * t.current.duration,
        y = Math.abs(t.current.currentTime - m) < 0.1;
      t.current.duration > 0 && !y && (t.current.currentTime = m);
    }, []),
    c = Je(() => {
      !(
        t.current.currentTime > 0 &&
        t.current.onplaying &&
        !t.current.paused &&
        !t.current.ended &&
        t.current.readyState > t.current.HAVE_CURRENT_DATA
      ) &&
        t.current &&
        !o.current &&
        n &&
        ((o.current = !0),
        t.current
          .play()
          .catch((m) => {})
          .finally(() => (o.current = !1)));
    }, []),
    f = Je(() => {
      !t.current || o.current || t.current.pause();
    }, []);
  return { play: c, pause: f, setProgress: i };
}
function Zi({
  playingProp: t,
  muted: n,
  loop: o,
  playsinline: i,
  controls: c,
}) {
  let [f] = Ne(() => t),
    [u, m] = Ne(!1);
  t !== f && !u && m(!0);
  let y = f && n && o && i && !c && !u,
    h;
  return (
    y ? (h = "on-viewport") : f ? (h = "on-mount") : (h = "no-autoplay"), h
  );
}
var _a = !1,
  es = Fn(function (n) {
    let {
        srcType: o,
        srcFile: i,
        srcUrl: c,
        playing: f,
        muted: u,
        playsinline: m,
        controls: y,
        progress: h,
        objectFit: O,
        backgroundColor: S,
        onSeeked: F,
        onPause: L,
        onPlay: p,
        onEnd: v,
        onClick: g,
        onMouseEnter: x,
        onMouseLeave: d,
        onMouseDown: C,
        onMouseUp: A,
        poster: E,
        posterEnabled: R,
        startTime: k,
        volume: H,
        loop: ne,
      } = n,
      Y = re(),
      ge = rr(),
      Oe = re(null),
      xe = re(null),
      ye = Dr(),
      V = nr(n),
      _ = ye
        ? "no-autoplay"
        : Zi({
            playingProp: f,
            muted: u,
            loop: ne,
            playsinline: m,
            controls: y,
          }),
      fe = ye ? !0 : Nt(Y),
      ae = k === 100 ? 99.9 : k,
      { play: pe, pause: ie, setProgress: me } = Qi(Y);
    le(() => {
      ye || (f ? pe() : ie());
    }, [f]),
      le(() => {
        ye || (_ === "on-viewport" && (fe ? pe() : ie()));
      }, [_, fe]),
      le(() => {
        if (!_a) {
          _a = !0;
          return;
        }
        let Q = Or(h) ? h.get() : (h ?? 0) * 0.01;
        me((Q ?? 0) || (ae ?? 0) / 100);
      }, [ae, i, c, h]),
      le(() => {
        if (Or(h)) return h.on("change", (Q) => me(Q));
      }, [h]),
      er(() => {
        Oe.current !== null &&
          Y.current &&
          ((!xe && ne) || !Oe.current) &&
          pe();
      }),
      tr(() => {
        Y.current &&
          ((xe.current = Y.current.ended),
          (Oe.current = Y.current.paused),
          ie());
      });
    let Ce = de(() => {
      let Q = "";
      if (o === De.Url) return c + Q;
      if (o === De.Video) return i + Q;
    }, [o, i, c, ae]);
    return (
      le(() => {
        ge && Y.current && _ === "on-mount" && setTimeout(() => pe(), 50);
      }, []),
      le(() => {
        Y.current && !u && (Y.current.volume = (H ?? 0) / 100);
      }, [H]),
      r("video", {
        onClick: g,
        onMouseEnter: x,
        onMouseLeave: d,
        onMouseDown: C,
        onMouseUp: A,
        src: Ce,
        loop: ne,
        ref: Y,
        onSeeked: (Q) => F?.(Q),
        onPause: (Q) => L?.(Q),
        onPlay: (Q) => p?.(Q),
        onEnded: (Q) => v?.(Q),
        autoPlay: _ === "on-mount",
        poster: R ? E : void 0,
        onLoadedData: () => {
          Y.current &&
            (Y.current.currentTime < 0.3 && me((ae ?? 0) * 0.01),
            _ === "on-mount" && pe());
        },
        controls: y,
        muted: ye ? !0 : u,
        playsInline: m,
        style: {
          cursor: g ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: V,
          display: "block",
          objectFit: O,
          backgroundColor: S,
          objectPosition: "50% 50%",
        },
      })
    );
  });
pt.displayName = "Video";
pt.defaultProps = {
  srcType: De.Url,
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: $e.Cover,
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var ts = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function rs(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ns(t) {
  return (t.match(ts) || []).map(rs).join(" ");
}
var Sa = [$e.Cover, $e.Fill, $e.Contain, $e.ScaleDown, $e.None];
je(pt, {
  srcType: {
    type: b.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: [De.Url, De.Video],
  },
  srcUrl: {
    type: b.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(t) {
      return t.srcType === De.Video;
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: b.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(t) {
      return t.srcType === De.Url;
    },
  },
  playing: {
    type: b.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: b.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: b.Image, title: " ", hidden: ({ posterEnabled: t }) => !t },
  backgroundColor: { type: b.Color, title: "Background" },
  ...ar,
  startTime: {
    title: "Start Time",
    type: b.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: b.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: b.Enum,
    title: "Fit",
    options: Sa,
    optionTitles: Sa.map(ns),
  },
  controls: {
    type: b.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: b.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: b.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: t }) => t,
  },
  onEnd: { type: b.EventHandler },
  onSeeked: { type: b.EventHandler },
  onPause: { type: b.EventHandler },
  onPlay: { type: b.EventHandler },
  ...Zt,
});
var as = $n(we),
  os = ["tvIEwISwc", "UXrFoSxqx"];
var is = { tvIEwISwc: "framer-v-135a7o0", UXrFoSxqx: "framer-v-g6vzaf" };
function ss(t, ...n) {
  let o = {};
  return n?.forEach((i) => i && Object.assign(o, t[i])), o;
}
var ls = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  zr = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  Aa = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  cs = { opacity: 0, rotate: 0, scale: 1, transition: Aa, x: 0, y: 0 },
  fs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Aa,
    x: 0,
    y: 0,
  },
  us = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0 },
  ds = ({ value: t, children: n }) => {
    let o = Pn(Tr),
      i = t ?? o.transition,
      c = de(() => ({ ...o, transition: i }), [JSON.stringify(i)]);
    return r(Tr.Provider, { value: c, children: n });
  },
  ps = ({ children: t, blockDocumentScrolling: n }) => {
    let [o, i] = Gn({ blockDocumentScrolling: n });
    return t({
      hide: () => i(!1),
      show: () => i(!0),
      toggle: () => i(!o),
      visible: o,
    });
  },
  ms = { "Variant 1": "tvIEwISwc", "Variant 2": "UXrFoSxqx" },
  hs = ({ height: t, id: n, image: o, width: i, ...c }) => {
    var f, u, m;
    return {
      ...c,
      hXXOYUFBx:
        (f = o ?? c.hXXOYUFBx) !== null && f !== void 0
          ? f
          : {
              src: "/framerusercontent.com/images/0StFcwM7Nju83JEn3PkfBa9Yw8s.jpeg?scale-down-to=512",
              srcSet:
                "/framerusercontent.com/images/0StFcwM7Nju83JEn3PkfBa9Yw8s.jpeg?scale-down-to=512 512w, /framerusercontent.com/images/0StFcwM7Nju83JEn3PkfBa9Yw8s.jpeg?scale-down-to=1024 1024w, /framerusercontent.com/images/0StFcwM7Nju83JEn3PkfBa9Yw8s.jpeg 1280w",
            },
      variant:
        (m = (u = ms[c.variant]) !== null && u !== void 0 ? u : c.variant) !==
          null && m !== void 0
          ? m
          : "tvIEwISwc",
    };
  },
  gs = (t, n) => n.join("-") + t.layoutDependency,
  ys = lt(function (t, n) {
    let { activeLocale: o } = Dt(),
      {
        style: i,
        className: c,
        layoutId: f,
        variant: u,
        hXXOYUFBx: m,
        ...y
      } = hs(t),
      {
        baseVariant: h,
        classNames: O,
        gestureVariant: S,
        setGestureState: F,
        setVariant: L,
        transition: p,
        variants: v,
      } = qn({
        cycleOrder: os,
        defaultVariant: "tvIEwISwc",
        transitions: ls,
        variant: u,
        variantClassNames: is,
      }),
      g = gs(t, v),
      { activeVariantCallback: x, delay: d } = Yn(h),
      C = (H) =>
        x(async (...ne) => {
          H.show();
        }),
      A = re(null),
      E = re(null),
      R = Bt(),
      k = [];
    return r(Qe, {
      id: f ?? R,
      children: r(J.div, {
        initial: u,
        animate: v,
        onHoverStart: () => F({ isHovered: !0 }),
        onHoverEnd: () => F({ isHovered: !1 }),
        onTapStart: () => F({ isPressed: !0 }),
        onTap: () => F({ isPressed: !1 }),
        onTapCancel: () => F({ isPressed: !1 }),
        className: Ze("framer-hxm3O", ...k, O),
        style: { display: "contents" },
        children: r(ps, {
          blockDocumentScrolling: !1,
          children: (H) =>
            r(Ln, {
              children: r(ds, {
                value: p,
                children: r(we, {
                  ...y,
                  background: {
                    alt: "",
                    fit: "fill",
                    sizes: "min(200px, 100vw)",
                    ...zr(m),
                  },
                  className: Ze("framer-135a7o0", c),
                  "data-framer-name": "Variant 1",
                  "data-highlight": !0,
                  layoutDependency: g,
                  layoutId: "tvIEwISwc",
                  onMouseEnter: C(H),
                  ref: n ?? A,
                  style: { ...i },
                  ...ss(
                    {
                      UXrFoSxqx: {
                        "data-framer-name": "Variant 2",
                        background: {
                          alt: "",
                          fit: "fill",
                          sizes: "min(100px, 100vw)",
                          ...zr(m),
                        },
                      },
                    },
                    h,
                    S
                  ),
                  children: r(In, {
                    children:
                      H.visible &&
                      r(zn, {
                        alignment: "center",
                        anchorRef: n ?? A,
                        className: Ze("framer-hxm3O", O, ...k),
                        collisionDetection: !1,
                        offsetX: 0,
                        offsetY: 323.5,
                        onDismiss: H.hide,
                        placement: "top",
                        portalSelector: "#overlay",
                        safeArea: !0,
                        zIndex: 11,
                        children: r(as, {
                          animate: fs,
                          background: {
                            alt: "",
                            fit: "fill",
                            sizes: "514px",
                            ...zr(m),
                          },
                          className: "framer-9a3dqs",
                          exit: cs,
                          initial: us,
                          layoutDependency: g,
                          layoutId: "zjylVojmZ",
                          ref: E,
                          role: "dialog",
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.05)",
                          },
                        }),
                      }),
                  }),
                }),
              }),
            }),
        }),
      }),
    });
  }),
  vs = [
    '.framer-hxm3O [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-hxm3O .framer-104f8mo { display: block; }",
    ".framer-hxm3O .framer-135a7o0 { height: 200px; overflow: hidden; position: relative; width: 200px; }",
    ".framer-hxm3O .framer-9a3dqs { height: 447px; overflow: hidden; position: relative; width: 514px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hxm3O.framer-v-g6vzaf .framer-135a7o0 { height: 100px; width: 100px; }",
  ],
  At = ft(ys, vs, "framer-hxm3O"),
  ce = At;
(At.displayName = "Meme"),
  (At.defaultProps = { height: 200, width: 200 }),
  je(At, {
    variant: {
      options: ["tvIEwISwc", "UXrFoSxqx"],
      optionTitles: ["Variant 1", "Variant 2"],
      title: "Variant",
      type: b.Enum,
    },
    hXXOYUFBx: {
      __defaultAssetReference:
        "data:framer/asset-reference,0StFcwM7Nju83JEn3PkfBa9Yw8s.jpeg?originalFilename=photo_2023-11-06+12.22.04+a.m..jpeg&preferredSize=auto",
      title: "Image",
      type: b.ResponsiveImage,
    },
  }),
  Yt(At, []);
var Wr = {
    ...tt,
    ...Qt,
    textAlign: "center",
    padding: 15,
    width: 200,
    height: 100,
    overflow: "hidden",
  },
  $u = {
    ...Wr,
    color: "#09f",
    background: "rgb(0, 153, 255, 0.1)",
    borderColor: "#09f",
  },
  ka = { fontSize: 12, fontWeight: 600, margin: 0 },
  Yr = { fontSize: 12, maxWidth: 200, lineHeight: 1.4, margin: "5px 0 0 0" };
var N = {},
  Ur = { exports: N };
(function () {
  "use strict";
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
      "function" &&
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
  var t = "18.2.0",
    n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    O = Symbol.for("react.suspense_list"),
    S = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    L = Symbol.for("react.offscreen"),
    p = Symbol.iterator,
    v = "@@iterator";
  function g(e) {
    if (e === null || typeof e != "object") return null;
    var a = (p && e[p]) || e[v];
    return typeof a == "function" ? a : null;
  }
  var x = { current: null },
    d = { transition: null },
    C = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
    A = { current: null },
    E = {},
    R = null;
  function k(e) {
    R = e;
  }
  (E.setExtraStackFrame = function (e) {
    R = e;
  }),
    (E.getCurrentStack = null),
    (E.getStackAddendum = function () {
      var e = "";
      R && (e += R);
      var a = E.getCurrentStack;
      return a && (e += a() || ""), e;
    });
  var H = !1,
    ne = !1,
    Y = !1,
    ge = !1,
    Oe = !1,
    xe = {
      ReactCurrentDispatcher: x,
      ReactCurrentBatchConfig: d,
      ReactCurrentOwner: A,
    };
  (xe.ReactDebugCurrentFrame = E), (xe.ReactCurrentActQueue = C);
  function ye(e) {
    {
      for (
        var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1;
        l < a;
        l++
      )
        s[l - 1] = arguments[l];
      _("warn", e, s);
    }
  }
  function V(e) {
    {
      for (
        var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1;
        l < a;
        l++
      )
        s[l - 1] = arguments[l];
      _("error", e, s);
    }
  }
  function _(e, a, s) {
    {
      var l = xe.ReactDebugCurrentFrame,
        w = l.getStackAddendum();
      w !== "" && ((a += "%s"), (s = s.concat([w])));
      var P = s.map(function (T) {
        return String(T);
      });
      P.unshift("Warning: " + a),
        Function.prototype.apply.call(console[e], console, P);
    }
  }
  var fe = {};
  function ae(e, a) {
    {
      var s = e.constructor,
        l = (s && (s.displayName || s.name)) || "ReactClass",
        w = l + "." + a;
      if (fe[w]) return;
      V(
        "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
        a,
        l
      ),
        (fe[w] = !0);
    }
  }
  var pe = {
      isMounted: function (e) {
        return !1;
      },
      enqueueForceUpdate: function (e, a, s) {
        ae(e, "forceUpdate");
      },
      enqueueReplaceState: function (e, a, s, l) {
        ae(e, "replaceState");
      },
      enqueueSetState: function (e, a, s, l) {
        ae(e, "setState");
      },
    },
    ie = Object.assign,
    me = {};
  Object.freeze(me);
  function Ce(e, a, s) {
    (this.props = e),
      (this.context = a),
      (this.refs = me),
      (this.updater = s || pe);
  }
  (Ce.prototype.isReactComponent = {}),
    (Ce.prototype.setState = function (e, a) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw new Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, a, "setState");
    }),
    (Ce.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  {
    var Pe = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
        ],
      },
      Q = function (e, a) {
        Object.defineProperty(Ce.prototype, e, {
          get: function () {
            ye(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              a[0],
              a[1]
            );
          },
        });
      };
    for (var ue in Pe) Pe.hasOwnProperty(ue) && Q(ue, Pe[ue]);
  }
  function ze() {}
  ze.prototype = Ce.prototype;
  function He(e, a, s) {
    (this.props = e),
      (this.context = a),
      (this.refs = me),
      (this.updater = s || pe);
  }
  var Be = (He.prototype = new ze());
  (Be.constructor = He), ie(Be, Ce.prototype), (Be.isPureReactComponent = !0);
  function gt() {
    var e = { current: null };
    return Object.seal(e), e;
  }
  var Ot = Array.isArray;
  function Ke(e) {
    return Ot(e);
  }
  function We(e) {
    {
      var a = typeof Symbol == "function" && Symbol.toStringTag,
        s = (a && e[Symbol.toStringTag]) || e.constructor.name || "Object";
      return s;
    }
  }
  function ur(e) {
    try {
      return yt(e), !1;
    } catch {
      return !0;
    }
  }
  function yt(e) {
    return "" + e;
  }
  function at(e) {
    if (ur(e))
      return (
        V(
          "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
          We(e)
        ),
        yt(e)
      );
  }
  function dr(e, a, s) {
    var l = e.displayName;
    if (l) return l;
    var w = a.displayName || a.name || "";
    return w !== "" ? s + "(" + w + ")" : s;
  }
  function Et(e) {
    return e.displayName || "Context";
  }
  function Ee(e) {
    if (e == null) return null;
    if (
      (typeof e.tag == "number" &&
        V(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ),
      typeof e == "function")
    )
      return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case i:
        return "Fragment";
      case o:
        return "Portal";
      case f:
        return "Profiler";
      case c:
        return "StrictMode";
      case h:
        return "Suspense";
      case O:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case m:
          var a = e;
          return Et(a) + ".Consumer";
        case u:
          var s = e;
          return Et(s._context) + ".Provider";
        case y:
          return dr(e, e.render, "ForwardRef");
        case S:
          var l = e.displayName || null;
          return l !== null ? l : Ee(e.type) || "Memo";
        case F: {
          var w = e,
            P = w._payload,
            T = w._init;
          try {
            return Ee(T(P));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var G = Object.prototype.hasOwnProperty,
    q = { key: !0, ref: !0, __self: !0, __source: !0 },
    Re,
    _e,
    Me;
  Me = {};
  function Ve(e) {
    if (G.call(e, "ref")) {
      var a = Object.getOwnPropertyDescriptor(e, "ref").get;
      if (a && a.isReactWarning) return !1;
    }
    return e.ref !== void 0;
  }
  function Xe(e) {
    if (G.call(e, "key")) {
      var a = Object.getOwnPropertyDescriptor(e, "key").get;
      if (a && a.isReactWarning) return !1;
    }
    return e.key !== void 0;
  }
  function Ye(e, a) {
    var s = function () {
      Re ||
        ((Re = !0),
        V(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
          a
        ));
    };
    (s.isReactWarning = !0),
      Object.defineProperty(e, "key", { get: s, configurable: !0 });
  }
  function vt(e, a) {
    var s = function () {
      _e ||
        ((_e = !0),
        V(
          "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
          a
        ));
    };
    (s.isReactWarning = !0),
      Object.defineProperty(e, "ref", { get: s, configurable: !0 });
  }
  function pr(e) {
    if (
      typeof e.ref == "string" &&
      A.current &&
      e.__self &&
      A.current.stateNode !== e.__self
    ) {
      var a = Ee(A.current.type);
      Me[a] ||
        (V(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          a,
          e.ref
        ),
        (Me[a] = !0));
    }
  }
  var mr = function (e, a, s, l, w, P, T) {
    var X = { $$typeof: n, type: e, key: a, ref: s, props: T, _owner: P };
    return (
      (X._store = {}),
      Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l,
      }),
      Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w,
      }),
      Object.freeze && (Object.freeze(X.props), Object.freeze(X)),
      X
    );
  };
  function za(e, a, s) {
    var l,
      w = {},
      P = null,
      T = null,
      X = null,
      W = null;
    if (a != null) {
      Ve(a) && ((T = a.ref), pr(a)),
        Xe(a) && (at(a.key), (P = "" + a.key)),
        (X = a.__self === void 0 ? null : a.__self),
        (W = a.__source === void 0 ? null : a.__source);
      for (l in a) G.call(a, l) && !q.hasOwnProperty(l) && (w[l] = a[l]);
    }
    var $ = arguments.length - 2;
    if ($ === 1) w.children = s;
    else if ($ > 1) {
      for (var Z = Array($), ee = 0; ee < $; ee++) Z[ee] = arguments[ee + 2];
      Object.freeze && Object.freeze(Z), (w.children = Z);
    }
    if (e && e.defaultProps) {
      var te = e.defaultProps;
      for (l in te) w[l] === void 0 && (w[l] = te[l]);
    }
    if (P || T) {
      var se =
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
      P && Ye(w, se), T && vt(w, se);
    }
    return mr(e, P, T, X, W, A.current, w);
  }
  function Wa(e, a) {
    var s = mr(e.type, a, e.ref, e._self, e._source, e._owner, e.props);
    return s;
  }
  function Ya(e, a, s) {
    if (e == null)
      throw new Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var l,
      w = ie({}, e.props),
      P = e.key,
      T = e.ref,
      X = e._self,
      W = e._source,
      $ = e._owner;
    if (a != null) {
      Ve(a) && ((T = a.ref), ($ = A.current)),
        Xe(a) && (at(a.key), (P = "" + a.key));
      var Z;
      e.type && e.type.defaultProps && (Z = e.type.defaultProps);
      for (l in a)
        G.call(a, l) &&
          !q.hasOwnProperty(l) &&
          (a[l] === void 0 && Z !== void 0 ? (w[l] = Z[l]) : (w[l] = a[l]));
    }
    var ee = arguments.length - 2;
    if (ee === 1) w.children = s;
    else if (ee > 1) {
      for (var te = Array(ee), se = 0; se < ee; se++)
        te[se] = arguments[se + 2];
      w.children = te;
    }
    return mr(e.type, P, T, X, W, $, w);
  }
  function ot(e) {
    return typeof e == "object" && e !== null && e.$$typeof === n;
  }
  var rn = ".",
    Ua = ":";
  function Ga(e) {
    var a = /[=:]/g,
      s = { "=": "=0", ":": "=2" },
      l = e.replace(a, function (w) {
        return s[w];
      });
    return "$" + l;
  }
  var nn = !1,
    qa = /\/+/g;
  function an(e) {
    return e.replace(qa, "$&/");
  }
  function hr(e, a) {
    return typeof e == "object" && e !== null && e.key != null
      ? (at(e.key), Ga("" + e.key))
      : a.toString(36);
  }
  function Rt(e, a, s, l, w) {
    var P = typeof e;
    (P === "undefined" || P === "boolean") && (e = null);
    var T = !1;
    if (e === null) T = !0;
    else
      switch (P) {
        case "string":
        case "number":
          T = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case n:
            case o:
              T = !0;
          }
      }
    if (T) {
      var X = e,
        W = w(X),
        $ = l === "" ? rn + hr(X, 0) : l;
      if (Ke(W)) {
        var Z = "";
        $ != null && (Z = an($) + "/"),
          Rt(W, a, Z, "", function (Do) {
            return Do;
          });
      } else
        W != null &&
          (ot(W) &&
            (W.key && (!X || X.key !== W.key) && at(W.key),
            (W = Wa(
              W,
              s +
                (W.key && (!X || X.key !== W.key) ? an("" + W.key) + "/" : "") +
                $
            ))),
          a.push(W));
      return 1;
    }
    var ee,
      te,
      se = 0,
      ve = l === "" ? rn : l + Ua;
    if (Ke(e))
      for (var Vt = 0; Vt < e.length; Vt++)
        (ee = e[Vt]), (te = ve + hr(ee, Vt)), (se += Rt(ee, a, s, te, w));
    else {
      var Sr = g(e);
      if (typeof Sr == "function") {
        var En = e;
        Sr === En.entries &&
          (nn ||
            ye(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ),
          (nn = !0));
        for (var Bo = Sr.call(En), Rn, No = 0; !(Rn = Bo.next()).done; )
          (ee = Rn.value),
            (te = ve + hr(ee, No++)),
            (se += Rt(ee, a, s, te, w));
      } else if (P === "object") {
        var jn = String(e);
        throw new Error(
          "Objects are not valid as a React child (found: " +
            (jn === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : jn) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
    }
    return se;
  }
  function jt(e, a, s) {
    if (e == null) return e;
    var l = [],
      w = 0;
    return (
      Rt(e, l, "", "", function (P) {
        return a.call(s, P, w++);
      }),
      l
    );
  }
  function $a(e) {
    var a = 0;
    return (
      jt(e, function () {
        a++;
      }),
      a
    );
  }
  function Ka(e, a, s) {
    jt(
      e,
      function () {
        a.apply(this, arguments);
      },
      s
    );
  }
  function Ja(e) {
    return (
      jt(e, function (a) {
        return a;
      }) || []
    );
  }
  function Qa(e) {
    if (!ot(e))
      throw new Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  }
  function Za(e) {
    var a = {
      $$typeof: m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    };
    a.Provider = { $$typeof: u, _context: a };
    var s = !1,
      l = !1,
      w = !1;
    {
      var P = { $$typeof: m, _context: a };
      Object.defineProperties(P, {
        Provider: {
          get: function () {
            return (
              l ||
                ((l = !0),
                V(
                  "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                )),
              a.Provider
            );
          },
          set: function (T) {
            a.Provider = T;
          },
        },
        _currentValue: {
          get: function () {
            return a._currentValue;
          },
          set: function (T) {
            a._currentValue = T;
          },
        },
        _currentValue2: {
          get: function () {
            return a._currentValue2;
          },
          set: function (T) {
            a._currentValue2 = T;
          },
        },
        _threadCount: {
          get: function () {
            return a._threadCount;
          },
          set: function (T) {
            a._threadCount = T;
          },
        },
        Consumer: {
          get: function () {
            return (
              s ||
                ((s = !0),
                V(
                  "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                )),
              a.Consumer
            );
          },
        },
        displayName: {
          get: function () {
            return a.displayName;
          },
          set: function (T) {
            w ||
              (ye(
                "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                T
              ),
              (w = !0));
          },
        },
      }),
        (a.Consumer = P);
    }
    return (a._currentRenderer = null), (a._currentRenderer2 = null), a;
  }
  var wt = -1,
    gr = 0,
    on = 1,
    eo = 2;
  function to(e) {
    if (e._status === wt) {
      var a = e._result,
        s = a();
      if (
        (s.then(
          function (P) {
            if (e._status === gr || e._status === wt) {
              var T = e;
              (T._status = on), (T._result = P);
            }
          },
          function (P) {
            if (e._status === gr || e._status === wt) {
              var T = e;
              (T._status = eo), (T._result = P);
            }
          }
        ),
        e._status === wt)
      ) {
        var l = e;
        (l._status = gr), (l._result = s);
      }
    }
    if (e._status === on) {
      var w = e._result;
      return (
        w === void 0 &&
          V(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            w
          ),
        "default" in w ||
          V(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            w
          ),
        w.default
      );
    } else throw e._result;
  }
  function ro(e) {
    var a = { _status: wt, _result: e },
      s = { $$typeof: F, _payload: a, _init: to };
    {
      var l, w;
      Object.defineProperties(s, {
        defaultProps: {
          configurable: !0,
          get: function () {
            return l;
          },
          set: function (P) {
            V(
              "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
            ),
              (l = P),
              Object.defineProperty(s, "defaultProps", { enumerable: !0 });
          },
        },
        propTypes: {
          configurable: !0,
          get: function () {
            return w;
          },
          set: function (P) {
            V(
              "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
            ),
              (w = P),
              Object.defineProperty(s, "propTypes", { enumerable: !0 });
          },
        },
      });
    }
    return s;
  }
  function no(e) {
    e != null && e.$$typeof === S
      ? V(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        )
      : typeof e != "function"
      ? V(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        )
      : e.length !== 0 &&
        e.length !== 2 &&
        V(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1
            ? "Did you forget to use the ref parameter?"
            : "Any additional parameter will be undefined."
        ),
      e != null &&
        (e.defaultProps != null || e.propTypes != null) &&
        V(
          "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
        );
    var a = { $$typeof: y, render: e };
    {
      var s;
      Object.defineProperty(a, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return s;
        },
        set: function (l) {
          (s = l), !e.name && !e.displayName && (e.displayName = l);
        },
      });
    }
    return a;
  }
  var sn;
  sn = Symbol.for("react.module.reference");
  function ln(e) {
    return !!(
      typeof e == "string" ||
      typeof e == "function" ||
      e === i ||
      e === f ||
      Oe ||
      e === c ||
      e === h ||
      e === O ||
      ge ||
      e === L ||
      H ||
      ne ||
      Y ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === F ||
          e.$$typeof === S ||
          e.$$typeof === u ||
          e.$$typeof === m ||
          e.$$typeof === y ||
          e.$$typeof === sn ||
          e.getModuleId !== void 0))
    );
  }
  function ao(e, a) {
    ln(e) ||
      V(
        "memo: The first argument must be a component. Instead received: %s",
        e === null ? "null" : typeof e
      );
    var s = { $$typeof: S, type: e, compare: a === void 0 ? null : a };
    {
      var l;
      Object.defineProperty(s, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return l;
        },
        set: function (w) {
          (l = w), !e.name && !e.displayName && (e.displayName = w);
        },
      });
    }
    return s;
  }
  function Se() {
    var e = x.current;
    return (
      e === null &&
        V(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
      e
    );
  }
  function oo(e) {
    var a = Se();
    if (e._context !== void 0) {
      var s = e._context;
      s.Consumer === e
        ? V(
            "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
          )
        : s.Provider === e &&
          V(
            "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
          );
    }
    return a.useContext(e);
  }
  function io(e) {
    var a = Se();
    return a.useState(e);
  }
  function so(e, a, s) {
    var l = Se();
    return l.useReducer(e, a, s);
  }
  function lo(e) {
    var a = Se();
    return a.useRef(e);
  }
  function co(e, a) {
    var s = Se();
    return s.useEffect(e, a);
  }
  function fo(e, a) {
    var s = Se();
    return s.useInsertionEffect(e, a);
  }
  function uo(e, a) {
    var s = Se();
    return s.useLayoutEffect(e, a);
  }
  function po(e, a) {
    var s = Se();
    return s.useCallback(e, a);
  }
  function mo(e, a) {
    var s = Se();
    return s.useMemo(e, a);
  }
  function ho(e, a, s) {
    var l = Se();
    return l.useImperativeHandle(e, a, s);
  }
  function go(e, a) {
    {
      var s = Se();
      return s.useDebugValue(e, a);
    }
  }
  function yo() {
    var e = Se();
    return e.useTransition();
  }
  function vo(e) {
    var a = Se();
    return a.useDeferredValue(e);
  }
  function wo() {
    var e = Se();
    return e.useId();
  }
  function bo(e, a, s) {
    var l = Se();
    return l.useSyncExternalStore(e, a, s);
  }
  var bt = 0,
    cn,
    fn,
    un,
    dn,
    pn,
    mn,
    hn;
  function gn() {}
  gn.__reactDisabledLog = !0;
  function xo() {
    {
      if (bt === 0) {
        (cn = console.log),
          (fn = console.info),
          (un = console.warn),
          (dn = console.error),
          (pn = console.group),
          (mn = console.groupCollapsed),
          (hn = console.groupEnd);
        var e = { configurable: !0, enumerable: !0, value: gn, writable: !0 };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e,
        });
      }
      bt++;
    }
  }
  function Co() {
    {
      if ((bt--, bt === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ie({}, e, { value: cn }),
          info: ie({}, e, { value: fn }),
          warn: ie({}, e, { value: un }),
          error: ie({}, e, { value: dn }),
          group: ie({}, e, { value: pn }),
          groupCollapsed: ie({}, e, { value: mn }),
          groupEnd: ie({}, e, { value: hn }),
        });
      }
      bt < 0 &&
        V(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
  }
  var yr = xe.ReactCurrentDispatcher,
    vr;
  function Ft(e, a, s) {
    {
      if (vr === void 0)
        try {
          throw Error();
        } catch (w) {
          var l = w.stack.trim().match(/\n( *(at )?)/);
          vr = (l && l[1]) || "";
        }
      return (
        `
` +
        vr +
        e
      );
    }
  }
  var wr = !1,
    Pt;
  {
    var _o = typeof WeakMap == "function" ? WeakMap : Map;
    Pt = new _o();
  }
  function yn(e, a) {
    if (!e || wr) return "";
    {
      var s = Pt.get(e);
      if (s !== void 0) return s;
    }
    var l;
    wr = !0;
    var w = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var P;
    (P = yr.current), (yr.current = null), xo();
    try {
      if (a) {
        var T = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(T.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(T, []);
          } catch (ve) {
            l = ve;
          }
          Reflect.construct(e, [], T);
        } else {
          try {
            T.call();
          } catch (ve) {
            l = ve;
          }
          e.call(T.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (ve) {
          l = ve;
        }
        e();
      }
    } catch (ve) {
      if (ve && l && typeof ve.stack == "string") {
        for (
          var X = ve.stack.split(`
`),
            W = l.stack.split(`
`),
            $ = X.length - 1,
            Z = W.length - 1;
          $ >= 1 && Z >= 0 && X[$] !== W[Z];

        )
          Z--;
        for (; $ >= 1 && Z >= 0; $--, Z--)
          if (X[$] !== W[Z]) {
            if ($ !== 1 || Z !== 1)
              do
                if (($--, Z--, Z < 0 || X[$] !== W[Z])) {
                  var ee =
                    `
` + X[$].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      ee.includes("<anonymous>") &&
                      (ee = ee.replace("<anonymous>", e.displayName)),
                    typeof e == "function" && Pt.set(e, ee),
                    ee
                  );
                }
              while ($ >= 1 && Z >= 0);
            break;
          }
      }
    } finally {
      (wr = !1), (yr.current = P), Co(), (Error.prepareStackTrace = w);
    }
    var te = e ? e.displayName || e.name : "",
      se = te ? Ft(te) : "";
    return typeof e == "function" && Pt.set(e, se), se;
  }
  function So(e, a, s) {
    return yn(e, !1);
  }
  function Ao(e) {
    var a = e.prototype;
    return !!(a && a.isReactComponent);
  }
  function Mt(e, a, s) {
    if (e == null) return "";
    if (typeof e == "function") return yn(e, Ao(e));
    if (typeof e == "string") return Ft(e);
    switch (e) {
      case h:
        return Ft("Suspense");
      case O:
        return Ft("SuspenseList");
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return So(e.render);
        case S:
          return Mt(e.type, a, s);
        case F: {
          var l = e,
            w = l._payload,
            P = l._init;
          try {
            return Mt(P(w), a, s);
          } catch {}
        }
      }
    return "";
  }
  var vn = {},
    wn = xe.ReactDebugCurrentFrame;
  function Lt(e) {
    if (e) {
      var a = e._owner,
        s = Mt(e.type, e._source, a ? a.type : null);
      wn.setExtraStackFrame(s);
    } else wn.setExtraStackFrame(null);
  }
  function ko(e, a, s, l, w) {
    {
      var P = Function.call.bind(G);
      for (var T in e)
        if (P(e, T)) {
          var X = void 0;
          try {
            if (typeof e[T] != "function") {
              var W = Error(
                (l || "React class") +
                  ": " +
                  s +
                  " type `" +
                  T +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  typeof e[T] +
                  "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ((W.name = "Invariant Violation"), W);
            }
            X = e[T](
              a,
              T,
              l,
              s,
              null,
              "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            );
          } catch ($) {
            X = $;
          }
          X &&
            !(X instanceof Error) &&
            (Lt(w),
            V(
              "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
              l || "React class",
              s,
              T,
              typeof X
            ),
            Lt(null)),
            X instanceof Error &&
              !(X.message in vn) &&
              ((vn[X.message] = !0),
              Lt(w),
              V("Failed %s type: %s", s, X.message),
              Lt(null));
        }
    }
  }
  function it(e) {
    if (e) {
      var a = e._owner,
        s = Mt(e.type, e._source, a ? a.type : null);
      k(s);
    } else k(null);
  }
  var br;
  br = !1;
  function bn() {
    if (A.current) {
      var e = Ee(A.current.type);
      if (e)
        return (
          `

Check the render method of \`` +
          e +
          "`."
        );
    }
    return "";
  }
  function To(e) {
    if (e !== void 0) {
      var a = e.fileName.replace(/^.*[\\\/]/, ""),
        s = e.lineNumber;
      return (
        `

Check your code at ` +
        a +
        ":" +
        s +
        "."
      );
    }
    return "";
  }
  function Oo(e) {
    return e != null ? To(e.__source) : "";
  }
  var xn = {};
  function Eo(e) {
    var a = bn();
    if (!a) {
      var s = typeof e == "string" ? e : e.displayName || e.name;
      s &&
        (a =
          `

Check the top-level render call using <` +
          s +
          ">.");
    }
    return a;
  }
  function Cn(e, a) {
    if (!(!e._store || e._store.validated || e.key != null)) {
      e._store.validated = !0;
      var s = Eo(a);
      if (!xn[s]) {
        xn[s] = !0;
        var l = "";
        e &&
          e._owner &&
          e._owner !== A.current &&
          (l = " It was passed a child from " + Ee(e._owner.type) + "."),
          it(e),
          V(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            s,
            l
          ),
          it(null);
      }
    }
  }
  function _n(e, a) {
    if (typeof e == "object") {
      if (Ke(e))
        for (var s = 0; s < e.length; s++) {
          var l = e[s];
          ot(l) && Cn(l, a);
        }
      else if (ot(e)) e._store && (e._store.validated = !0);
      else if (e) {
        var w = g(e);
        if (typeof w == "function" && w !== e.entries)
          for (var P = w.call(e), T; !(T = P.next()).done; )
            ot(T.value) && Cn(T.value, a);
      }
    }
  }
  function Sn(e) {
    {
      var a = e.type;
      if (a == null || typeof a == "string") return;
      var s;
      if (typeof a == "function") s = a.propTypes;
      else if (typeof a == "object" && (a.$$typeof === y || a.$$typeof === S))
        s = a.propTypes;
      else return;
      if (s) {
        var l = Ee(a);
        ko(s, e.props, "prop", l, e);
      } else if (a.PropTypes !== void 0 && !br) {
        br = !0;
        var w = Ee(a);
        V(
          "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
          w || "Unknown"
        );
      }
      typeof a.getDefaultProps == "function" &&
        !a.getDefaultProps.isReactClassApproved &&
        V(
          "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
        );
    }
  }
  function Ro(e) {
    {
      for (var a = Object.keys(e.props), s = 0; s < a.length; s++) {
        var l = a[s];
        if (l !== "children" && l !== "key") {
          it(e),
            V(
              "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
              l
            ),
            it(null);
          break;
        }
      }
      e.ref !== null &&
        (it(e),
        V("Invalid attribute `ref` supplied to `React.Fragment`."),
        it(null));
    }
  }
  function An(e, a, s) {
    var l = ln(e);
    if (!l) {
      var w = "";
      (e === void 0 ||
        (typeof e == "object" && e !== null && Object.keys(e).length === 0)) &&
        (w +=
          " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var P = Oo(a);
      P ? (w += P) : (w += bn());
      var T;
      e === null
        ? (T = "null")
        : Ke(e)
        ? (T = "array")
        : e !== void 0 && e.$$typeof === n
        ? ((T = "<" + (Ee(e.type) || "Unknown") + " />"),
          (w =
            " Did you accidentally export a JSX literal instead of a component?"))
        : (T = typeof e),
        V(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          T,
          w
        );
    }
    var X = za.apply(this, arguments);
    if (X == null) return X;
    if (l) for (var W = 2; W < arguments.length; W++) _n(arguments[W], e);
    return e === i ? Ro(X) : Sn(X), X;
  }
  var kn = !1;
  function jo(e) {
    var a = An.bind(null, e);
    return (
      (a.type = e),
      kn ||
        ((kn = !0),
        ye(
          "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
        )),
      Object.defineProperty(a, "type", {
        enumerable: !1,
        get: function () {
          return (
            ye(
              "Factory.type is deprecated. Access the class directly before passing it to createFactory."
            ),
            Object.defineProperty(this, "type", { value: e }),
            e
          );
        },
      }),
      a
    );
  }
  function Fo(e, a, s) {
    for (var l = Ya.apply(this, arguments), w = 2; w < arguments.length; w++)
      _n(arguments[w], l.type);
    return Sn(l), l;
  }
  function Po(e, a) {
    var s = d.transition;
    d.transition = {};
    var l = d.transition;
    d.transition._updatedFibers = new Set();
    try {
      e();
    } finally {
      if (((d.transition = s), s === null && l._updatedFibers)) {
        var w = l._updatedFibers.size;
        w > 10 &&
          ye(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ),
          l._updatedFibers.clear();
      }
    }
  }
  var Tn = !1,
    It = null;
  function Mo(e) {
    if (It === null)
      try {
        var a = ("require" + Math.random()).slice(0, 7),
          s = Ur[a];
        It = s.call(Ur, "timers").setImmediate;
      } catch {
        It = function (w) {
          Tn === !1 &&
            ((Tn = !0),
            typeof MessageChannel > "u" &&
              V(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
          var P = new MessageChannel();
          (P.port1.onmessage = w), P.port2.postMessage(void 0);
        };
      }
    return It(e);
  }
  var st = 0,
    On = !1;
  function Lo(e) {
    {
      var a = st;
      st++, C.current === null && (C.current = []);
      var s = C.isBatchingLegacy,
        l;
      try {
        if (
          ((C.isBatchingLegacy = !0),
          (l = e()),
          !s && C.didScheduleLegacyUpdate)
        ) {
          var w = C.current;
          w !== null && ((C.didScheduleLegacyUpdate = !1), _r(w));
        }
      } catch (te) {
        throw (Ht(a), te);
      } finally {
        C.isBatchingLegacy = s;
      }
      if (l !== null && typeof l == "object" && typeof l.then == "function") {
        var P = l,
          T = !1,
          X = {
            then: function (te, se) {
              (T = !0),
                P.then(
                  function (ve) {
                    Ht(a), st === 0 ? xr(ve, te, se) : te(ve);
                  },
                  function (ve) {
                    Ht(a), se(ve);
                  }
                );
            },
          };
        return (
          !On &&
            typeof Promise < "u" &&
            Promise.resolve()
              .then(function () {})
              .then(function () {
                T ||
                  ((On = !0),
                  V(
                    "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                  ));
              }),
          X
        );
      } else {
        var W = l;
        if ((Ht(a), st === 0)) {
          var $ = C.current;
          $ !== null && (_r($), (C.current = null));
          var Z = {
            then: function (te, se) {
              C.current === null ? ((C.current = []), xr(W, te, se)) : te(W);
            },
          };
          return Z;
        } else {
          var ee = {
            then: function (te, se) {
              te(W);
            },
          };
          return ee;
        }
      }
    }
  }
  function Ht(e) {
    e !== st - 1 &&
      V(
        "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
      ),
      (st = e);
  }
  function xr(e, a, s) {
    {
      var l = C.current;
      if (l !== null)
        try {
          _r(l),
            Mo(function () {
              l.length === 0 ? ((C.current = null), a(e)) : xr(e, a, s);
            });
        } catch (w) {
          s(w);
        }
      else a(e);
    }
  }
  var Cr = !1;
  function _r(e) {
    if (!Cr) {
      Cr = !0;
      var a = 0;
      try {
        for (; a < e.length; a++) {
          var s = e[a];
          do s = s(!0);
          while (s !== null);
        }
        e.length = 0;
      } catch (l) {
        throw ((e = e.slice(a + 1)), l);
      } finally {
        Cr = !1;
      }
    }
  }
  var Io = An,
    Ho = Fo,
    Vo = jo,
    Xo = { map: jt, forEach: Ka, count: $a, toArray: Ja, only: Qa };
  (N.Children = Xo),
    (N.Component = Ce),
    (N.Fragment = i),
    (N.Profiler = f),
    (N.PureComponent = He),
    (N.StrictMode = c),
    (N.Suspense = h),
    (N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xe),
    (N.cloneElement = Ho),
    (N.createContext = Za),
    (N.createElement = Io),
    (N.createFactory = Vo),
    (N.createRef = gt),
    (N.forwardRef = no),
    (N.isValidElement = ot),
    (N.lazy = ro),
    (N.memo = ao),
    (N.startTransition = Po),
    (N.unstable_act = Lo),
    (N.useCallback = po),
    (N.useContext = oo),
    (N.useDebugValue = go),
    (N.useDeferredValue = vo),
    (N.useEffect = co),
    (N.useId = wo),
    (N.useImperativeHandle = ho),
    (N.useInsertionEffect = fo),
    (N.useLayoutEffect = uo),
    (N.useMemo = mo),
    (N.useReducer = so),
    (N.useRef = lo),
    (N.useState = io),
    (N.useSyncExternalStore = bo),
    (N.useTransition = yo),
    (N.version = t),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        "function" &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();
var B = Ur.exports,
  Qu = B.Children,
  Zu = B.Component,
  ed = B.Fragment,
  td = B.Profiler,
  rd = B.PureComponent,
  nd = B.StrictMode,
  ad = B.Suspense,
  od = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  id = B.cloneElement,
  sd = B.createContext,
  ld = B.createElement,
  cd = B.createFactory,
  fd = B.createRef,
  ud = B.forwardRef,
  dd = B.isValidElement,
  pd = B.lazy,
  md = B.memo,
  hd = B.startTransition,
  gd = B.unstable_act,
  yd = B.useCallback,
  vd = B.useContext,
  wd = B.useDebugValue,
  bd = B.useDeferredValue,
  xd = B.useEffect,
  Cd = B.useId,
  _d = B.useImperativeHandle,
  Sd = B.useInsertionEffect,
  Ad = B.useLayoutEffect,
  kd = B.useMemo,
  Td = B.useReducer,
  Od = B.useRef,
  Ed = B.useState,
  Rd = B.useSyncExternalStore,
  jd = B.useTransition,
  Fd = B.version;
var ke = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : I,
  ja = {},
  kt,
  Ta = (kt = B) && typeof kt == "object" && "default" in kt ? kt.default : kt;
function Fa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function lr(t, n) {
  return t((n = { exports: {} }), n.exports), n.exports;
}
var ws = lr(function (t, n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var o = typeof Symbol == "function" && Symbol.for,
    i = o ? Symbol.for("react.element") : 60103,
    c = o ? Symbol.for("react.portal") : 60106,
    f = o ? Symbol.for("react.fragment") : 60107,
    u = o ? Symbol.for("react.strict_mode") : 60108,
    m = o ? Symbol.for("react.profiler") : 60114,
    y = o ? Symbol.for("react.provider") : 60109,
    h = o ? Symbol.for("react.context") : 60110,
    O = o ? Symbol.for("react.async_mode") : 60111,
    S = o ? Symbol.for("react.concurrent_mode") : 60111,
    F = o ? Symbol.for("react.forward_ref") : 60112,
    L = o ? Symbol.for("react.suspense") : 60113,
    p = o ? Symbol.for("react.memo") : 60115,
    v = o ? Symbol.for("react.lazy") : 60116;
  function g(d) {
    if (typeof d == "object" && d !== null) {
      var C = d.$$typeof;
      switch (C) {
        case i:
          switch ((d = d.type)) {
            case O:
            case S:
            case f:
            case m:
            case u:
            case L:
              return d;
            default:
              switch ((d = d && d.$$typeof)) {
                case h:
                case F:
                case y:
                  return d;
                default:
                  return C;
              }
          }
        case v:
        case p:
        case c:
          return C;
      }
    }
  }
  function x(d) {
    return g(d) === S;
  }
  (n.typeOf = g),
    (n.AsyncMode = O),
    (n.ConcurrentMode = S),
    (n.ContextConsumer = h),
    (n.ContextProvider = y),
    (n.Element = i),
    (n.ForwardRef = F),
    (n.Fragment = f),
    (n.Lazy = v),
    (n.Memo = p),
    (n.Portal = c),
    (n.Profiler = m),
    (n.StrictMode = u),
    (n.Suspense = L),
    (n.isValidElementType = function (d) {
      return (
        typeof d == "string" ||
        typeof d == "function" ||
        d === f ||
        d === S ||
        d === m ||
        d === u ||
        d === L ||
        (typeof d == "object" &&
          d !== null &&
          (d.$$typeof === v ||
            d.$$typeof === p ||
            d.$$typeof === y ||
            d.$$typeof === h ||
            d.$$typeof === F))
      );
    }),
    (n.isAsyncMode = function (d) {
      return x(d) || g(d) === O;
    }),
    (n.isConcurrentMode = x),
    (n.isContextConsumer = function (d) {
      return g(d) === h;
    }),
    (n.isContextProvider = function (d) {
      return g(d) === y;
    }),
    (n.isElement = function (d) {
      return typeof d == "object" && d !== null && d.$$typeof === i;
    }),
    (n.isForwardRef = function (d) {
      return g(d) === F;
    }),
    (n.isFragment = function (d) {
      return g(d) === f;
    }),
    (n.isLazy = function (d) {
      return g(d) === v;
    }),
    (n.isMemo = function (d) {
      return g(d) === p;
    }),
    (n.isPortal = function (d) {
      return g(d) === c;
    }),
    (n.isProfiler = function (d) {
      return g(d) === m;
    }),
    (n.isStrictMode = function (d) {
      return g(d) === u;
    }),
    (n.isSuspense = function (d) {
      return g(d) === L;
    });
});
Fa(ws);
var Pa = lr(function (t, n) {
  (function () {
    Object.defineProperty(n, "__esModule", { value: !0 });
    var o = typeof Symbol == "function" && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      c = o ? Symbol.for("react.portal") : 60106,
      f = o ? Symbol.for("react.fragment") : 60107,
      u = o ? Symbol.for("react.strict_mode") : 60108,
      m = o ? Symbol.for("react.profiler") : 60114,
      y = o ? Symbol.for("react.provider") : 60109,
      h = o ? Symbol.for("react.context") : 60110,
      O = o ? Symbol.for("react.async_mode") : 60111,
      S = o ? Symbol.for("react.concurrent_mode") : 60111,
      F = o ? Symbol.for("react.forward_ref") : 60112,
      L = o ? Symbol.for("react.suspense") : 60113,
      p = o ? Symbol.for("react.memo") : 60115,
      v = o ? Symbol.for("react.lazy") : 60116;
    function g(_) {
      if (typeof _ == "object" && _ !== null) {
        var fe = _.$$typeof;
        switch (fe) {
          case i:
            var ae = _.type;
            switch (ae) {
              case O:
              case S:
              case f:
              case m:
              case u:
              case L:
                return ae;
              default:
                var pe = ae && ae.$$typeof;
                switch (pe) {
                  case h:
                  case F:
                  case y:
                    return pe;
                  default:
                    return fe;
                }
            }
          case v:
          case p:
          case c:
            return fe;
        }
      }
    }
    var x = O,
      d = S,
      C = h,
      A = y,
      E = i,
      R = F,
      k = f,
      H = v,
      ne = p,
      Y = c,
      ge = m,
      Oe = u,
      xe = L,
      ye = !1;
    function V(_) {
      return g(_) === S;
    }
    (n.typeOf = g),
      (n.AsyncMode = x),
      (n.ConcurrentMode = d),
      (n.ContextConsumer = C),
      (n.ContextProvider = A),
      (n.Element = E),
      (n.ForwardRef = R),
      (n.Fragment = k),
      (n.Lazy = H),
      (n.Memo = ne),
      (n.Portal = Y),
      (n.Profiler = ge),
      (n.StrictMode = Oe),
      (n.Suspense = xe),
      (n.isValidElementType = function (_) {
        return (
          typeof _ == "string" ||
          typeof _ == "function" ||
          _ === f ||
          _ === S ||
          _ === m ||
          _ === u ||
          _ === L ||
          (typeof _ == "object" &&
            _ !== null &&
            (_.$$typeof === v ||
              _.$$typeof === p ||
              _.$$typeof === y ||
              _.$$typeof === h ||
              _.$$typeof === F))
        );
      }),
      (n.isAsyncMode = function (_) {
        return (
          ye ||
            ((ye = !0),
            (function (fe, ae) {
              if (ae === void 0)
                throw new Error(
                  "`lowPriorityWarning(condition, format, ...args)` requires a warning message argument"
                );
              if (!fe) {
                for (
                  var pe = arguments.length,
                    ie = Array(pe > 2 ? pe - 2 : 0),
                    me = 2;
                  me < pe;
                  me++
                )
                  ie[me - 2] = arguments[me];
                (function (Ce) {
                  for (
                    var Pe = arguments.length,
                      Q = Array(Pe > 1 ? Pe - 1 : 0),
                      ue = 1;
                    ue < Pe;
                    ue++
                  )
                    Q[ue - 1] = arguments[ue];
                  var ze = 0,
                    He =
                      "Warning: " +
                      Ce.replace(/%s/g, function () {
                        return Q[ze++];
                      });
                  typeof console < "u" && console.warn(He);
                  try {
                    throw new Error(He);
                  } catch {}
                }).apply(void 0, [ae].concat(ie));
              }
            })(
              !1,
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
            )),
          V(_) || g(_) === O
        );
      }),
      (n.isConcurrentMode = V),
      (n.isContextConsumer = function (_) {
        return g(_) === h;
      }),
      (n.isContextProvider = function (_) {
        return g(_) === y;
      }),
      (n.isElement = function (_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === i;
      }),
      (n.isForwardRef = function (_) {
        return g(_) === F;
      }),
      (n.isFragment = function (_) {
        return g(_) === f;
      }),
      (n.isLazy = function (_) {
        return g(_) === v;
      }),
      (n.isMemo = function (_) {
        return g(_) === p;
      }),
      (n.isPortal = function (_) {
        return g(_) === c;
      }),
      (n.isProfiler = function (_) {
        return g(_) === m;
      }),
      (n.isStrictMode = function (_) {
        return g(_) === u;
      }),
      (n.isSuspense = function (_) {
        return g(_) === L;
      });
  })();
});
Fa(Pa);
var Oa = lr(function (t) {
    t.exports = Pa;
  }),
  Ea = Object.getOwnPropertySymbols,
  bs = Object.prototype.hasOwnProperty,
  xs = Object.prototype.propertyIsEnumerable,
  Cs = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), Object.getOwnPropertyNames(t)[0] === "5")) return !1;
      for (var n = {}, o = 0; o < 10; o++) n["_" + String.fromCharCode(o)] = o;
      if (
        Object.getOwnPropertyNames(n)
          .map(function (c) {
            return n[c];
          })
          .join("") !== "0123456789"
      )
        return !1;
      var i = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (c) {
          i[c] = c;
        }),
        Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
      );
    } catch {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, n) {
        for (
          var o,
            i,
            c = (function (y) {
              if (y == null)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(y);
            })(t),
            f = 1;
          f < arguments.length;
          f++
        ) {
          for (var u in (o = Object(arguments[f])))
            bs.call(o, u) && (c[u] = o[u]);
          if (Ea) {
            i = Ea(o);
            for (var m = 0; m < i.length; m++)
              xs.call(o, i[m]) && (c[i[m]] = o[i[m]]);
          }
        }
        return c;
      },
  rt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  qr = function () {};
(Ma = rt),
  (sr = {}),
  (La = Function.call.bind(Object.prototype.hasOwnProperty)),
  (qr = function (t) {
    var n = "Warning: " + t;
    typeof console < "u" && console.error(n);
    try {
      throw new Error(n);
    } catch {}
  });
var Ma, sr, La;
function Ia(t, n, o, i, c) {
  for (var f in t)
    if (La(t, f)) {
      var u;
      try {
        if (typeof t[f] != "function") {
          var m = Error(
            (i || "React class") +
              ": " +
              o +
              " type `" +
              f +
              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
              typeof t[f] +
              "`."
          );
          throw ((m.name = "Invariant Violation"), m);
        }
        u = t[f](n, f, i, o, null, Ma);
      } catch (h) {
        u = h;
      }
      if (
        (!u ||
          u instanceof Error ||
          qr(
            (i || "React class") +
              ": type specification of " +
              o +
              " `" +
              f +
              "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
              typeof u +
              ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ),
        u instanceof Error && !(u.message in sr))
      ) {
        sr[u.message] = !0;
        var y = c ? c() : "";
        qr("Failed " + o + " type: " + u.message + (y ?? ""));
      }
    }
}
Ia.resetWarningCache = function () {
  sr = {};
};
var Ra = Ia,
  _s = Function.call.bind(Object.prototype.hasOwnProperty),
  Tt = function () {};
function or() {
  return null;
}
function Ss() {}
function As() {}
(Tt = function (t) {
  var n = "Warning: " + t;
  typeof console < "u" && console.error(n);
  try {
    throw new Error(n);
  } catch {}
}),
  (As.resetWarningCache = Ss);
var mt = lr(function (t) {
    t.exports = (function (n, o) {
      var i = typeof Symbol == "function" && Symbol.iterator,
        c = "@@iterator",
        f = "<<anonymous>>",
        u = {
          array: h("array"),
          bool: h("boolean"),
          func: h("function"),
          number: h("number"),
          object: h("object"),
          string: h("string"),
          symbol: h("symbol"),
          any: y(or),
          arrayOf: function (p) {
            return y(function (v, g, x, d, C) {
              if (typeof p != "function")
                return new m(
                  "Property `" +
                    C +
                    "` of component `" +
                    x +
                    "` has invalid PropType notation inside arrayOf."
                );
              var A = v[g];
              if (!Array.isArray(A))
                return new m(
                  "Invalid " +
                    d +
                    " `" +
                    C +
                    "` of type `" +
                    S(A) +
                    "` supplied to `" +
                    x +
                    "`, expected an array."
                );
              for (var E = 0; E < A.length; E++) {
                var R = p(A, E, x, d, C + "[" + E + "]", rt);
                if (R instanceof Error) return R;
              }
              return null;
            });
          },
          element: y(function (p, v, g, x, d) {
            var C = p[v];
            return n(C)
              ? null
              : new m(
                  "Invalid " +
                    x +
                    " `" +
                    d +
                    "` of type `" +
                    S(C) +
                    "` supplied to `" +
                    g +
                    "`, expected a single ReactElement."
                );
          }),
          elementType: y(function (p, v, g, x, d) {
            var C = p[v];
            return Oa.isValidElementType(C)
              ? null
              : new m(
                  "Invalid " +
                    x +
                    " `" +
                    d +
                    "` of type `" +
                    S(C) +
                    "` supplied to `" +
                    g +
                    "`, expected a single ReactElement type."
                );
          }),
          instanceOf: function (p) {
            return y(function (v, g, x, d, C) {
              var A;
              return v[g] instanceof p
                ? null
                : new m(
                    "Invalid " +
                      d +
                      " `" +
                      C +
                      "` of type `" +
                      ((A = v[g]).constructor && A.constructor.name
                        ? A.constructor.name
                        : f) +
                      "` supplied to `" +
                      x +
                      "`, expected instance of `" +
                      (p.name || f) +
                      "`."
                  );
            });
          },
          node: y(function (p, v, g, x, d) {
            return O(p[v])
              ? null
              : new m(
                  "Invalid " +
                    x +
                    " `" +
                    d +
                    "` supplied to `" +
                    g +
                    "`, expected a ReactNode."
                );
          }),
          objectOf: function (p) {
            return y(function (v, g, x, d, C) {
              if (typeof p != "function")
                return new m(
                  "Property `" +
                    C +
                    "` of component `" +
                    x +
                    "` has invalid PropType notation inside objectOf."
                );
              var A = v[g],
                E = S(A);
              if (E !== "object")
                return new m(
                  "Invalid " +
                    d +
                    " `" +
                    C +
                    "` of type `" +
                    E +
                    "` supplied to `" +
                    x +
                    "`, expected an object."
                );
              for (var R in A)
                if (_s(A, R)) {
                  var k = p(A, R, x, d, C + "." + R, rt);
                  if (k instanceof Error) return k;
                }
              return null;
            });
          },
          oneOf: function (p) {
            return Array.isArray(p)
              ? y(function (v, g, x, d, C) {
                  for (var A = v[g], E = 0; E < p.length; E++)
                    if (
                      (R = A) === (k = p[E])
                        ? R !== 0 || 1 / R == 1 / k
                        : R != R && k != k
                    )
                      return null;
                  var R,
                    k,
                    H = JSON.stringify(p, function (ne, Y) {
                      return F(Y) === "symbol" ? String(Y) : Y;
                    });
                  return new m(
                    "Invalid " +
                      d +
                      " `" +
                      C +
                      "` of value `" +
                      String(A) +
                      "` supplied to `" +
                      x +
                      "`, expected one of " +
                      H +
                      "."
                  );
                })
              : (Tt(
                  arguments.length > 1
                    ? "Invalid arguments supplied to oneOf, expected an array, got " +
                        arguments.length +
                        " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                    : "Invalid argument supplied to oneOf, expected an array."
                ),
                or);
          },
          oneOfType: function (p) {
            if (!Array.isArray(p))
              return (
                Tt(
                  "Invalid argument supplied to oneOfType, expected an instance of array."
                ),
                or
              );
            for (var v = 0; v < p.length; v++) {
              var g = p[v];
              if (typeof g != "function")
                return (
                  Tt(
                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                      L(g) +
                      " at index " +
                      v +
                      "."
                  ),
                  or
                );
            }
            return y(function (x, d, C, A, E) {
              for (var R = 0; R < p.length; R++)
                if ((0, p[R])(x, d, C, A, E, rt) == null) return null;
              return new m(
                "Invalid " + A + " `" + E + "` supplied to `" + C + "`."
              );
            });
          },
          shape: function (p) {
            return y(function (v, g, x, d, C) {
              var A = v[g],
                E = S(A);
              if (E !== "object")
                return new m(
                  "Invalid " +
                    d +
                    " `" +
                    C +
                    "` of type `" +
                    E +
                    "` supplied to `" +
                    x +
                    "`, expected `object`."
                );
              for (var R in p) {
                var k = p[R];
                if (k) {
                  var H = k(A, R, x, d, C + "." + R, rt);
                  if (H) return H;
                }
              }
              return null;
            });
          },
          exact: function (p) {
            return y(function (v, g, x, d, C) {
              var A = v[g],
                E = S(A);
              if (E !== "object")
                return new m(
                  "Invalid " +
                    d +
                    " `" +
                    C +
                    "` of type `" +
                    E +
                    "` supplied to `" +
                    x +
                    "`, expected `object`."
                );
              var R = Cs({}, v[g], p);
              for (var k in R) {
                var H = p[k];
                if (!H)
                  return new m(
                    "Invalid " +
                      d +
                      " `" +
                      C +
                      "` key `" +
                      k +
                      "` supplied to `" +
                      x +
                      "`.\nBad object: " +
                      JSON.stringify(v[g], null, "  ") +
                      `
Valid keys: ` +
                      JSON.stringify(Object.keys(p), null, "  ")
                  );
                var ne = H(A, k, x, d, C + "." + k, rt);
                if (ne) return ne;
              }
              return null;
            });
          },
        };
      function m(p) {
        ((this || ke).message = p), ((this || ke).stack = "");
      }
      function y(p) {
        var v = {},
          g = 0;
        function x(C, A, E, R, k, H, ne) {
          if (((R = R || f), (H = H || E), ne !== rt)) {
            if (o) {
              var Y = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((Y.name = "Invariant Violation"), Y);
            }
            if (typeof console < "u") {
              var ge = R + ":" + E;
              !v[ge] &&
                g < 3 &&
                (Tt(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    H +
                    "` prop on `" +
                    R +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                ),
                (v[ge] = !0),
                g++);
            }
          }
          return A[E] == null
            ? C
              ? new m(
                  A[E] === null
                    ? "The " +
                      k +
                      " `" +
                      H +
                      "` is marked as required in `" +
                      R +
                      "`, but its value is `null`."
                    : "The " +
                      k +
                      " `" +
                      H +
                      "` is marked as required in `" +
                      R +
                      "`, but its value is `undefined`."
                )
              : null
            : p(A, E, R, k, H);
        }
        var d = x.bind(null, !1);
        return (d.isRequired = x.bind(null, !0)), d;
      }
      function h(p) {
        return y(function (v, g, x, d, C, A) {
          var E = v[g];
          return S(E) !== p
            ? new m(
                "Invalid " +
                  d +
                  " `" +
                  C +
                  "` of type `" +
                  F(E) +
                  "` supplied to `" +
                  x +
                  "`, expected `" +
                  p +
                  "`."
              )
            : null;
        });
      }
      function O(p) {
        switch (typeof p) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !p;
          case "object":
            if (Array.isArray(p)) return p.every(O);
            if (p === null || n(p)) return !0;
            var v = (function (C) {
              var A = p && ((i && p[i]) || p[c]);
              if (typeof A == "function") return A;
            })();
            if (!v) return !1;
            var g,
              x = v.call(p);
            if (v !== p.entries) {
              for (; !(g = x.next()).done; ) if (!O(g.value)) return !1;
            } else
              for (; !(g = x.next()).done; ) {
                var d = g.value;
                if (d && !O(d[1])) return !1;
              }
            return !0;
          default:
            return !1;
        }
      }
      function S(p) {
        var v = typeof p;
        return Array.isArray(p)
          ? "array"
          : p instanceof RegExp
          ? "object"
          : (function (g, x) {
              return (
                g === "symbol" ||
                (!!x &&
                  (x["@@toStringTag"] === "Symbol" ||
                    (typeof Symbol == "function" && x instanceof Symbol)))
              );
            })(v, p)
          ? "symbol"
          : v;
      }
      function F(p) {
        if (p == null) return "" + p;
        var v = S(p);
        if (v === "object") {
          if (p instanceof Date) return "date";
          if (p instanceof RegExp) return "regexp";
        }
        return v;
      }
      function L(p) {
        var v = F(p);
        switch (v) {
          case "array":
          case "object":
            return "an " + v;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + v;
          default:
            return v;
        }
      }
      return (
        (m.prototype = Error.prototype),
        (u.checkPropTypes = Ra),
        (u.resetWarningCache = Ra.resetWarningCache),
        (u.PropTypes = u),
        u
      );
    })(Oa.isElement, !0);
  }),
  ir = [],
  Gr = (function (t) {
    function n() {
      t.apply(this || ke, arguments), ((this || ke).state = { isLoading: !0 });
    }
    return (
      t && (n.__proto__ = t),
      ((n.prototype = Object.create(t && t.prototype)).constructor = n),
      (n.prototype.loadTweetForProps = function (o) {
        var i = this || ke,
          c = function () {
            j.twttr.ready().then(function (u) {
              var m = u.widgets;
              i._div && (i._div.innerHTML = "");
              var y = o.onTweetLoadSuccess,
                h = o.onTweetLoadError;
              m.createTweetEmbed(i.props.id, i._div, o.options)
                .then(function (O) {
                  i.setState({ isLoading: !1 }), y && y(O);
                })
                .catch(h);
            });
          },
          f = j.twttr;
        f && f.ready
          ? c()
          : (function (u, m) {
              if (ir.length === 0) {
                ir.push(m);
                var y = document.createElement("script");
                y.setAttribute("src", u),
                  (y.onload = function () {
                    return ir.forEach(function (h) {
                      return h();
                    });
                  }),
                  document.body.appendChild(y);
              } else ir.push(m);
            })(
              (j.location.protocol.indexOf("file") >= 0
                ? (this || ke).props.protocol
                : "") + "//platform.twitter.com/widgets.js",
              c
            );
      }),
      (n.prototype.componentDidMount = function () {
        this.loadTweetForProps((this || ke).props);
      }),
      (n.prototype.shouldComponentUpdate = function (o, i) {
        return (
          (this || ke).props.id !== o.id ||
          (this || ke).props.className !== o.className
        );
      }),
      (n.prototype.componentWillUpdate = function (o, i) {
        (this || ke).props.id !== o.id && this.loadTweetForProps(o);
      }),
      (n.prototype.render = function () {
        var o = this || ke;
        return Ta.createElement(
          "div",
          {
            className: (this || ke).props.className,
            ref: function (i) {
              o._div = i;
            },
          },
          (this || ke).state.isLoading && (this || ke).props.placeholder
        );
      }),
      n
    );
  })(Ta.Component);
(Gr.propTypes = {
  id: mt.string,
  options: mt.object,
  protocol: mt.string,
  onTweetLoadSuccess: mt.func,
  onTweetLoadError: mt.func,
  className: mt.string,
}),
  (Gr.defaultProps = { protocol: "https:", options: {}, className: null }),
  (ja = Gr);
var ks = ja,
  $r = ks;
var Ts = /^https?:\/\/twitter\.com\/[^\/]+\/status\/(\d+)/,
  Kr = ft(
    function ({ url: n, style: o, theme: i, ...c }) {
      let f = de(() => {
        var u;
        let [, m] =
          (u = n.match(Ts)) !== null && u !== void 0 ? u : [null, null];
        return m;
      }, [n]);
      return n && f
        ? r(J.div, {
            style: { ...tt, ...o },
            children: r(
              $r,
              { className: "framer-twitter", id: f, options: { theme: i } },
              `${f}.${i}`
            ),
          })
        : K(J.div, {
            style: { ...Wr, ...o },
            ...c,
            children: [
              r("h1", { style: ka, children: "Twitter" }),
              n
                ? r("p", {
                    style: Yr,
                    children: "This tweet URL doesn\u2019t seem correct.",
                  })
                : r("p", {
                    style: Yr,
                    children: "Set a tweet URL in the Properties.",
                  }),
            ],
          });
    },
    [
      ".framer-twitter { width: 100% !important; height: 100% !important; }",
      ".framer-twitter > div { width: 100% !important; max-width: 100% !important; height: 100% !important; margin: 0 !important; }",
      ".framer-twitter iframe { width: 100% !important; height: 100% !important; }",
    ]
  );
Kr.defaultProps = { theme: "light" };
je(Kr, {
  url: {
    title: "URL",
    type: b.String,
    placeholder: "https://twitter.com/***/status/1234",
    defaultValue: "https://twitter.com/jack/status/20",
  },
  theme: {
    title: "Theme",
    type: b.Enum,
    options: ["light", "dark"],
    optionTitles: ["Light", "Dark"],
  },
});
var Jr = Kr;
var Ha = (t) => {
  let n = () => {
    let o = [
      { x: 0, y: "-100vh" },
      { x: 0, y: "100vh" },
      { x: "-100vw", y: 0 },
      { x: "100vw", y: 0 },
    ];
    return o[Math.floor(Math.random() * o.length)];
  };
  return (o) => {
    let i = n();
    return r(J.div, {
      initial: i,
      animate: { x: 0, y: 0 },
      transition: { type: "spring", stiffness: 60 },
      children: r(t, { ...o }),
    });
  };
};
var Te = ct(we),
  Os = et(Fe),
  Es = et(be),
  Qr = ct(Ae),
  Rs = et(Ie),
  Zr = ct(J.div),
  js = et(pt),
  Fs = et(Jr),
  Ps = ct(z),
  Ms = et(ce),
  Ls = ct(Ha(we));
var Is = { tXJmDh1vf: "(max-width: 1199px)", xlcoI4ubJ: "(min-width: 1200px)" };
var Va = "framer-7XAHj",
  Hs = { tXJmDh1vf: "framer-v-64xbw9", xlcoI4ubJ: "framer-v-bdfu8i" },
  Vs = (t, n) => `translateX(-50%) ${n}`,
  Xa = { delay: 0, duration: 0.6, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Xs = {
    opacity: 1,
    rotate: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Bs = {
    opacity: 0.7,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.4,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Ns = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Ds = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 41,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 24,
  },
  zs = { delay: 0, duration: 0.7, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ws = {
    opacity: 0.3,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Ys = {
    delay: 0,
    duration: 1,
    ease: [0.79, -0.33, 0.79, 0.33],
    type: "tween",
  },
  Us = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 18,
  },
  Gs = { delay: 0, duration: 1.6, ease: [0.44, 0, 0.56, 1], type: "tween" },
  qs = {
    opacity: 1,
    rotate: 2,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  $s = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ks = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.7,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  nt = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ba = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: nt,
    x: 0,
    y: 0,
  },
  Na = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  Js = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  cr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Qs = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Zs = { delay: 0, duration: 0.06, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ht = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: nt,
  },
  en = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  tn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: nt,
    x: 0,
    y: 0,
  },
  el = { delay: 0, duration: 0.41, ease: [0.44, 0, 0.56, 1], type: "tween" },
  tl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 66,
    y: 0,
  },
  rl = { delay: 0, duration: 0.11, ease: [0, 0, 1, 1], type: "tween" },
  nl = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  al = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: nt,
  },
  he = (t, n) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: n };
  },
  ol = { delay: 0, duration: 0.02, ease: [0.44, 0, 0.56, 1], type: "tween" },
  il = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  sl = {
    opacity: 1,
    rotate: 25,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Da = jr(),
  ll = { Desktop: "xlcoI4ubJ", Phone: "tXJmDh1vf" },
  cl = ({ height: t, id: n, width: o, ...i }) => {
    var c, f;
    return {
      ...i,
      variant:
        (f = (c = ll[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && f !== void 0
          ? f
          : "xlcoI4ubJ",
    };
  },
  fl = lt(function (t, n) {
    let { activeLocale: o, setLocale: i } = Dt(),
      { style: c, className: f, layoutId: u, variant: m, ...y } = cl(t);
    Mn(() => {
      let v = jr(void 0, o);
      if (((document.title = v.title || ""), v.viewport)) {
        var g;
        (g = document.querySelector('meta[name="viewport"]')) === null ||
          g === void 0 ||
          g.setAttribute("content", v.viewport);
      }
      if (v.robots) {
        let x = document.querySelector('meta[name="robots"]');
        x
          ? x.setAttribute("content", v.robots)
          : ((x = document.createElement("meta")),
            x.setAttribute("name", "robots"),
            x.setAttribute("content", v.robots),
            document.head.appendChild(x));
      }
      if (v.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((x) => x.startsWith("framer-body-"))
            .map((x) => document.body.classList.remove(x)),
          document.body.classList.add(`${v.bodyClassName}-framer-7XAHj`),
          () => {
            document.body.classList.remove(`${v.bodyClassName}-framer-7XAHj`);
          }
        );
    }, [void 0, o]);
    let [h, O] = Un(m, Is, !1),
      S = void 0,
      F = re(null),
      L = Bt(),
      p = [];
    return (
      Dn({}),
      r(Wn.Provider, {
        value: { primaryVariantId: "xlcoI4ubJ", variantClassNames: Hs },
        children: K(Qe, {
          id: u ?? L,
          children: [
            K(J.div, {
              ...y,
              className: Ze(Va, ...p, "framer-bdfu8i", f),
              ref: n ?? F,
              style: { ...c },
              children: [
                r(oe, {
                  breakpoint: h,
                  overrides: { tXJmDh1vf: { style: { rotate: 11 } } },
                  children: K(J.div, {
                    className: "framer-1jiuflo",
                    "data-framer-name": "sia",
                    name: "sia",
                    transformTemplate: Vs,
                    children: [
                      r(Te, {
                        __framer__loop: Xs,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Xa,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 409,
                          intrinsicWidth: 193.5,
                          pixelHeight: 818,
                          pixelWidth: 387,
                          sizes: "87px",
                          src: "/framerusercontent.com/images/vBO01e9FML54B4WiQazfMWI4lg.png?scale-down-to=512",
                          srcSet:
                            "/framerusercontent.com/images/vBO01e9FML54B4WiQazfMWI4lg.png 387w",
                        },
                        className: "framer-16mzuur",
                        "data-framer-name": "Layer_5",
                        name: "Layer_5",
                      }),
                      r(Te, {
                        __framer__loop: Bs,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "mirror",
                        __framer__loopTransition: Xa,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 555,
                          intrinsicWidth: 264,
                          pixelHeight: 1110,
                          pixelWidth: 528,
                          sizes: "100px",
                          src: "/framerusercontent.com/images/YZVV9hNoF72CxYFhCexfMDzco.png?scale-down-to=1024",
                          srcSet:
                            "/framerusercontent.com/images/YZVV9hNoF72CxYFhCexfMDzco.png 528w",
                        },
                        className: "framer-1dbyig7",
                        "data-framer-name": "Layer_4",
                        name: "Layer_4",
                      }),
                      r(Te, {
                        __framer__loop: Ds,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: Ns,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 500.5,
                          intrinsicWidth: 519,
                          pixelHeight: 1001,
                          pixelWidth: 1038,
                          sizes: "237px",
                          src: "/framerusercontent.com/images/lce7jV8k6RiKQmKjGW38su1r48.png?scale-down-to=1024",
                          srcSet:
                            "/framerusercontent.com/images/lce7jV8k6RiKQmKjGW38su1r48.png?scale-down-to=512 512w,/framerusercontent.com/images/lce7jV8k6RiKQmKjGW38su1r48.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lce7jV8k6RiKQmKjGW38su1r48.png 1038w",
                        },
                        className: "framer-sii6w9",
                        "data-framer-name": "Layer_3",
                        name: "Layer_3",
                        style: { transformPerspective: 1200 },
                      }),
                      r(Te, {
                        __framer__loop: Ws,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "mirror",
                        __framer__loopTransition: zs,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 221,
                          intrinsicWidth: 167,
                          pixelHeight: 442,
                          pixelWidth: 334,
                          src: "/framerusercontent.com/images/Eu7WRKa0WpmMonkWGD5lNOGMhEI.png",
                        },
                        className: "framer-1eatzsf",
                        "data-framer-name": "Layer_2",
                        name: "Layer_2",
                      }),
                      r(Te, {
                        __framer__loop: Us,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: "mirror",
                        __framer__loopTransition: Ys,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 372.5,
                          intrinsicWidth: 170,
                          pixelHeight: 745,
                          pixelWidth: 340,
                          sizes: "104px",
                          src: "/framerusercontent.com/images/68yBcQjce8L21gmXcxMhJT8BM.png?scale-down-to=512",
                          srcSet:
                            "/framerusercontent.com/images/68yBcQjce8L21gmXcxMhJT8BM.png 340w",
                        },
                        className: "framer-3awfu0",
                        "data-framer-name": "Layer_1",
                        name: "Layer_1",
                      }),
                      r(oe, {
                        breakpoint: h,
                        overrides: {
                          tXJmDh1vf: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 375.5,
                              intrinsicWidth: 519.5,
                              loading: "lazy",
                              pixelHeight: 751,
                              pixelWidth: 1039,
                              sizes: "259px",
                              src: "/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=1024",
                              srcSet:
                                "/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=512 512w,/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=1024 1024w,/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png 1039w",
                            },
                          },
                        },
                        children: r(Te, {
                          __framer__loop: qs,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0.2,
                          __framer__loopRepeatType: "loop",
                          __framer__loopTransition: Gs,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 375.5,
                            intrinsicWidth: 519.5,
                            pixelHeight: 751,
                            pixelWidth: 1039,
                            sizes: "259px",
                            src: "/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=512 512w,/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png?scale-down-to=1024 1024w,/framerusercontent.com/images/gYYOtai3YvSuqYlJp2ioMSYtTZo.png 1039w",
                          },
                          className: "framer-1uq27c4",
                          "data-framer-name": "Layer_0",
                          name: "Layer_0",
                        }),
                      }),
                    ],
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-18gha0r-container",
                    layoutScroll: !0,
                    children: r(Fe, {
                      animOptions: {
                        damping: 60,
                        delay: 0,
                        duration: 1,
                        ease: [0.44, 0, 0.56, 1],
                        mass: 1,
                        stiffness: 500,
                        type: "tween",
                      },
                      animPause: 0,
                      animRepeat: !0,
                      colors: [
                        "rgb(255, 0, 0)",
                        "rgb(64, 0, 255)",
                        "rgb(247, 255, 0)",
                      ],
                      height: "100%",
                      id: "YJyTG5V9W",
                      layoutId: "YJyTG5V9W",
                      radius: 0,
                      randomStart: !0,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(Te, {
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 1373,
                        y: 2184,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 386,
                    intrinsicWidth: 351.5,
                    pixelHeight: 772,
                    pixelWidth: 703,
                    sizes: "162px",
                    src: "/framerusercontent.com/images/KTDtX9maXOeAN4sjOcCrNF3gw.png?scale-down-to=512",
                    srcSet:
                      "/framerusercontent.com/images/KTDtX9maXOeAN4sjOcCrNF3gw.png 703w",
                  },
                  className: "framer-ubgo6o",
                  "data-framer-name": "image_2024_01_08_22_31_18",
                  name: "image_2024_01_08_22_31_18",
                  style: { transformPerspective: 1200 },
                }),
                r(Te, {
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 0,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.3,
                        skewX: 0,
                        skewY: 0,
                        x: -649,
                        y: 2651,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 392,
                    intrinsicWidth: 448,
                    pixelHeight: 784,
                    pixelWidth: 896,
                    sizes: "113px",
                    src: "/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png?scale-down-to=512",
                    srcSet:
                      "/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png?scale-down-to=512 512w,/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png 896w",
                  },
                  className: "framer-1a12bw",
                  "data-framer-name": "image_2024_01_08_22_30_36",
                  name: "image_2024_01_08_22_30_36",
                  style: { transformPerspective: 1200 },
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-1dtykhb-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 63,
                      height: "100%",
                      hoverFactor: 1,
                      id: "yfkiLubiz",
                      layoutId: "yfkiLubiz",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 640,
                            intrinsicWidth: 396,
                            pixelHeight: 1280,
                            pixelWidth: 792,
                            sizes: "140.4563px",
                            src: "/framerusercontent.com/images/6i8xayWfkI9ieeZ7hiBer8WaNM.jpg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/6i8xayWfkI9ieeZ7hiBer8WaNM.jpg?scale-down-to=1024 633w,/framerusercontent.com/images/6i8xayWfkI9ieeZ7hiBer8WaNM.jpg 792w",
                          },
                          className: "framer-1bdlfe0",
                          "data-framer-name": "$2024_01_08_10_35_06_p_m_",
                          name: "$2024_01_08_10_35_06_p_m_",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-s86oyk-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 2e3,
                      height: "100%",
                      hoverFactor: 1,
                      id: "jZRiNzQ6F",
                      layoutId: "jZRiNzQ6F",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(Te, {
                          __framer__loop: Ks,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: $s,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 450,
                            intrinsicWidth: 445.5,
                            pixelHeight: 900,
                            pixelWidth: 891,
                            sizes: "269px",
                            src: "/framerusercontent.com/images/n7wmQMeU8YECREGSArzHD2WJOw.jpeg?scale-down-to=512",
                            srcSet:
                              "/framerusercontent.com/images/n7wmQMeU8YECREGSArzHD2WJOw.jpeg 891w",
                          },
                          className: "framer-1ihbi85",
                          "data-framer-name": "photo_2024_01_08_10_41_29_p_m_",
                          name: "photo_2024_01_08_10_41_29_p_m_",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(Te, {
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: -43,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.3,
                        skewX: 0,
                        skewY: 0,
                        x: 1381,
                        y: 852,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 512.5,
                    intrinsicWidth: 515.5,
                    pixelHeight: 1025,
                    pixelWidth: 1031,
                    sizes: "169px",
                    src: "/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png?scale-down-to=1024",
                    srcSet:
                      "/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png?scale-down-to=512 512w,/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png?scale-down-to=1024 1024w,/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png 1031w",
                  },
                  className: "framer-1h5eas2",
                  "data-framer-name": "image_2024_01_08_22_30_45",
                  name: "image_2024_01_08_22_30_45",
                  style: { transformPerspective: 1200 },
                }),
                r(Te, {
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: 72,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.3,
                        skewX: 0,
                        skewY: 0,
                        x: -1449,
                        y: 266,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 226,
                    intrinsicWidth: 339.5,
                    loading: "lazy",
                    pixelHeight: 452,
                    pixelWidth: 679,
                    sizes: "231px",
                    src: "/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg?scale-down-to=512",
                    srcSet:
                      "/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg?scale-down-to=512 512w,/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg 679w",
                  },
                  className: "framer-1bc3443",
                  "data-framer-name": "$12",
                  name: "$12",
                  style: { transformPerspective: 1200 },
                }),
                r(oe, {
                  breakpoint: h,
                  overrides: {
                    tXJmDh1vf: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 540,
                        intrinsicWidth: 945,
                        pixelHeight: 1080,
                        pixelWidth: 1890,
                        sizes: "calc(100vw + 1249px)",
                        src: "/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=1024",
                        srcSet:
                          "/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=512 512w,/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=1024 1024w,/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png 1890w",
                      },
                    },
                  },
                  children: r(we, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 540,
                      intrinsicWidth: 945,
                      pixelHeight: 1080,
                      pixelWidth: 1890,
                      sizes: "calc(100vw + 200px)",
                      src: "/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=1024",
                      srcSet:
                        "/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=512 512w,/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png?scale-down-to=1024 1024w,/framerusercontent.com/images/KdRNq0mzVppT5lHVUjBg0YP7ClI.png 1890w",
                    },
                    className: "framer-1mpgas3",
                    "data-framer-name": "BG",
                    name: "BG",
                  }),
                }),
                r(Te, {
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                        x: -109,
                        y: 0,
                      },
                    },
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1.3,
                        skewX: 0,
                        skewY: 0,
                        x: 1486,
                        y: -690,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 310,
                    intrinsicWidth: 250,
                    loading: "lazy",
                    pixelHeight: 620,
                    pixelWidth: 500,
                    sizes: "261px",
                    src: "/framerusercontent.com/images/XvY0TIcHhpFZm0nI03tCOnJ0tg.webp?scale-down-to=512",
                    srcSet:
                      "/framerusercontent.com/images/XvY0TIcHhpFZm0nI03tCOnJ0tg.webp 500w",
                  },
                  className: "framer-p0x6zm",
                  "data-framer-name": "$15",
                  name: "$15",
                  style: { transformPerspective: 1200 },
                }),
                r("div", {
                  className: "framer-1rgvmx6",
                  children: r(oe, {
                    breakpoint: h,
                    overrides: {
                      tXJmDh1vf: {
                        "data-framer-appear-id": "1dyxta8",
                        animate: xt("animate", "1dyxta8", Ba, "64xbw9"),
                        initial: xt("initial", "1dyxta8", Na, "64xbw9"),
                      },
                    },
                    children: K(J.div, {
                      animate: xt("animate", "1rodly3", Ba, "bdfu8i"),
                      className: "framer-1rodly3",
                      "data-framer-appear-id": "1rodly3",
                      initial: xt("initial", "1rodly3", Na, "bdfu8i"),
                      style: { transformPerspective: 1200 },
                      children: [
                        K("div", {
                          className: "framer-yhf51r",
                          children: [
                            r(oe, {
                              breakpoint: h,
                              overrides: {
                                tXJmDh1vf: {
                                  children: r(U, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "RlM7Q29taWNvLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Comico", sans-serif',
                                        "--framer-font-size": "31px",
                                      },
                                      children: "you looked",
                                    }),
                                  }),
                                },
                              },
                              children: r(Qr, {
                                __framer__loop: cr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Js,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: r(U, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7Q29taWNvLXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Comico", sans-serif',
                                      "--framer-font-size": "65px",
                                    },
                                    children: "you looked",
                                  }),
                                }),
                                className: "framer-ircu4w",
                                fonts: ["FS;Comico-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            r(oe, {
                              breakpoint: h,
                              overrides: {
                                tXJmDh1vf: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 302,
                                    intrinsicWidth: 359,
                                    pixelHeight: 604,
                                    pixelWidth: 718,
                                    sizes: "291px",
                                    src: "/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png?scale-down-to=512",
                                    srcSet:
                                      "/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png?scale-down-to=512 512w,/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png 718w",
                                  },
                                },
                              },
                              children: r(Te, {
                                __framer__loop: cr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Qs,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 302,
                                  intrinsicWidth: 359,
                                  pixelHeight: 604,
                                  pixelWidth: 718,
                                  sizes: "567px",
                                  src: "/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png?scale-down-to=512",
                                  srcSet:
                                    "/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png?scale-down-to=512 512w,/framerusercontent.com/images/dHLdhBfkveVfFQNwIWRLyxN04.png 718w",
                                },
                                className: "framer-no0l5f",
                                "data-framer-name": "image",
                                name: "image",
                              }),
                            }),
                            r(oe, {
                              breakpoint: h,
                              overrides: {
                                tXJmDh1vf: {
                                  children: r(U, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "RlM7Q29taWNvLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Comico", sans-serif',
                                        "--framer-font-size": "31px",
                                      },
                                      children: "NOW you must ape",
                                    }),
                                  }),
                                },
                              },
                              children: r(Qr, {
                                __framer__loop: cr,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: Zs,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: r(U, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7Q29taWNvLXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Comico", sans-serif',
                                      "--framer-font-size": "65px",
                                    },
                                    children: "NOW you must ape",
                                  }),
                                }),
                                className: "framer-de5smv",
                                fonts: ["FS;Comico-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            r(oe, {
                              breakpoint: h,
                              overrides: {
                                tXJmDh1vf: {
                                  children: K(U, {
                                    children: [
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q29taWMgTmV1ZS03MDA=",
                                          "--framer-font-family":
                                            '"Comic Neue", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-font-weight": "700",
                                          "--framer-text-alignment": "center",
                                        },
                                        children: "CONTRACT ADDRESS",
                                      }),
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q29taWMgTmV1ZS03MDA=",
                                          "--framer-font-family":
                                            '"Comic Neue", sans-serif',
                                          "--framer-font-size": "19px",
                                          "--framer-font-weight": "700",
                                          "--framer-text-alignment": "center",
                                        },
                                        children:
                                          "0xcomingsoon",
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: r(Ae, {
                                __fromCanvasComponent: !0,
                                children: K(U, {
                                  children: [
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family":
                                          '"Comic Neue", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-font-weight": "700",
                                        "--framer-text-alignment": "center",
                                      },
                                      children: "CONTRACT ADDRESS",
                                    }),
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q29taWMgTmV1ZS03MDA=",
                                        "--framer-font-family":
                                          '"Comic Neue", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-font-weight": "700",
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "0xcomingsoon",
                                    }),
                                  ],
                                }),
                                className: "framer-xmiud5",
                                fonts: ["GF;Comic Neue-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        K("div", {
                          className: "framer-h3rxck",
                          children: [
                            K("div", {
                              className: "framer-a7a3wv",
                              children: [
                                r(Ge, {
                                  href: "https://x.com/",
                                  children: K(J.a, {
                                    className: "framer-440tzf framer-1dzttcd",
                                    "data-border": !0,
                                    whileHover: ht,
                                    children: [
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            children: r(U, {
                                              children: r("p", {
                                                style: {
                                                  "--font-selector":
                                                    "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Comico", sans-serif',
                                                  "--framer-font-size": "12px",
                                                },
                                                children: "twitter",
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(Ae, {
                                          __fromCanvasComponent: !0,
                                          children: r(U, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Comico", sans-serif',
                                                "--framer-font-size": "17px",
                                              },
                                              children: "twitter",
                                            }),
                                          }),
                                          className: "framer-pj344b",
                                          fonts: ["FS;Comico-regular"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      r(D, {
                                        children: r(z, {
                                          className: "framer-sg97ew-container",
                                          children: r(Ie, {
                                            color: "rgb(0, 0, 0)",
                                            height: "100%",
                                            iconSearch: "Home",
                                            iconSelection: "Twitter",
                                            iconStyle15: "Filled",
                                            iconStyle2: "Filled",
                                            iconStyle7: "Filled",
                                            id: "BB6WlVi93",
                                            layoutId: "BB6WlVi93",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                r(Ge, {
                                  href: "https://t.me/",
                                  children: K(J.a, {
                                    className: "framer-1u8njyo framer-1dzttcd",
                                    "data-border": !0,
                                    whileHover: ht,
                                    children: [
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            children: r(U, {
                                              children: r("p", {
                                                style: {
                                                  "--font-selector":
                                                    "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Comico", sans-serif',
                                                  "--framer-font-size": "12px",
                                                },
                                                children: "telegram",
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(Ae, {
                                          __fromCanvasComponent: !0,
                                          children: r(U, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Comico", sans-serif',
                                                "--framer-font-size": "17px",
                                              },
                                              children: "telegram",
                                            }),
                                          }),
                                          className: "framer-iy1kax",
                                          fonts: ["FS;Comico-regular"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      r(D, {
                                        children: r(z, {
                                          className: "framer-1hbw5au-container",
                                          children: r(Ie, {
                                            color: "rgb(0, 0, 0)",
                                            height: "100%",
                                            iconSearch: "Home",
                                            iconSelection: "Telegram",
                                            iconStyle15: "Filled",
                                            iconStyle2: "Filled",
                                            iconStyle7: "Filled",
                                            id: "CviwXLQrY",
                                            layoutId: "CviwXLQrY",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            K("div", {
                              className: "framer-qnswnm",
                              children: [
                                r(Ge, {
                                  href: "https://dexscreener.com/ethereum/0xcomingsoon",
                                  children: K(J.a, {
                                    className: "framer-1tdwjxn framer-1dzttcd",
                                    "data-border": !0,
                                    whileHover: ht,
                                    children: [
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            children: r(U, {
                                              children: r("p", {
                                                style: {
                                                  "--font-selector":
                                                    "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Comico", sans-serif',
                                                  "--framer-font-size": "12px",
                                                },
                                                children: "dexscreener",
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(Ae, {
                                          __fromCanvasComponent: !0,
                                          children: r(U, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Comico", sans-serif',
                                                "--framer-font-size": "17px",
                                              },
                                              children: "dexscreener",
                                            }),
                                          }),
                                          className: "framer-1c2vyxe",
                                          fonts: ["FS;Comico-regular"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 16"><path d="M 1.414 0.966 C 1.51 1.03 1.601 1.096 1.69 1.16 C 1.9 1.31 2.097 1.452 2.312 1.554 C 2.443 1.617 2.704 1.574 2.816 1.475 C 5.059 -0.489 7.949 -0.492 10.154 1.468 C 10.267 1.569 10.524 1.617 10.655 1.558 C 10.866 1.463 11.059 1.327 11.266 1.182 C 11.353 1.12 11.443 1.057 11.538 0.995 C 11.513 1.047 11.491 1.099 11.47 1.15 C 11.424 1.258 11.38 1.362 11.322 1.457 C 10.404 2.974 9.099 4.063 7.576 4.903 C 7.481 4.956 7.305 4.927 7.198 4.873 C 6.721 4.631 6.258 4.634 5.782 4.872 C 5.674 4.925 5.497 4.957 5.404 4.906 C 3.86 4.048 2.534 2.945 1.618 1.392 C 1.567 1.305 1.525 1.212 1.481 1.113 C 1.46 1.066 1.438 1.017 1.414 0.966 Z" fill="rgb(0, 0, 0)"></path><path d="M 0 12.967 L 0.002 12.963 C 0.422 12.623 0.842 12.284 1.271 11.937 L 1.67 11.614 C 1.94 12.056 2.202 12.484 2.465 12.913 L 2.473 12.927 L 2.473 12.927 L 2.962 13.726 L 3.467 13.249 L 3.468 13.248 C 3.753 12.978 4.031 12.715 4.319 12.443 L 5.133 13.774 L 5.141 13.787 C 5.59 14.521 6.036 15.251 6.491 15.997 C 6.946 15.253 7.386 14.532 7.823 13.814 L 7.83 13.803 L 8.661 12.442 C 9.127 12.884 9.559 13.294 10.017 13.726 L 10.434 13.046 L 11.313 11.614 L 12.189 12.326 L 12.219 12.35 L 13 12.985 C 12.917 12.739 12.831 12.497 12.747 12.259 C 12.56 11.73 12.378 11.213 12.23 10.687 C 11.877 9.429 11.833 8.132 11.836 6.831 C 11.837 6.126 11.826 5.416 11.751 4.715 C 11.686 4.1 11.463 3.519 11.121 2.969 C 11.049 3.057 10.982 3.144 10.918 3.227 C 10.775 3.411 10.643 3.581 10.492 3.732 C 10.297 3.927 10.279 4.085 10.389 4.344 C 10.819 5.361 10.355 6.344 9.306 6.678 C 9.147 6.729 8.981 6.761 8.817 6.792 C 8.744 6.806 8.67 6.819 8.598 6.835 C 8.511 7.327 8.621 7.686 9.118 7.903 C 9.397 8.025 9.658 8.189 9.935 8.361 C 10.061 8.44 10.191 8.521 10.327 8.601 C 10.222 8.66 10.119 8.721 10.016 8.783 L 10.016 8.783 C 9.812 8.905 9.625 9.017 9.427 9.106 C 8.672 9.447 8.185 10.038 7.879 10.786 C 7.597 11.476 7.339 12.174 7.103 12.88 C 6.956 13.318 6.829 13.763 6.702 14.208 C 6.644 14.41 6.587 14.611 6.528 14.811 C 6.413 14.636 6.353 14.455 6.294 14.276 C 6.281 14.236 6.268 14.197 6.254 14.157 C 6.146 13.847 6.04 13.537 5.934 13.226 C 5.636 12.351 5.337 11.476 5.006 10.613 C 4.758 9.963 4.3 9.466 3.651 9.165 C 3.425 9.059 3.21 8.929 2.984 8.79 C 2.877 8.725 2.77 8.66 2.662 8.597 C 2.783 8.525 2.904 8.451 3.023 8.375 C 3.274 8.218 3.508 8.071 3.758 7.962 C 4.264 7.742 4.508 7.413 4.379 6.826 C 4.367 6.824 4.354 6.821 4.339 6.817 C 4.299 6.806 4.259 6.799 4.217 6.795 C 2.829 6.698 1.982 5.422 2.652 4.174 C 2.686 4.111 2.688 3.982 2.647 3.93 C 2.456 3.687 2.255 3.453 2.047 3.208 C 1.979 3.129 1.911 3.048 1.841 2.967 C 1.813 3.024 1.785 3.078 1.759 3.13 C 1.701 3.246 1.648 3.35 1.601 3.456 C 1.256 4.235 1.11 5.052 1.132 5.903 C 1.196 8.315 1.085 10.697 0.002 12.963 L 0.001 12.964 Z" fill="rgb(0, 0, 0)"></path><path d="M 8.546 8.599 L 8.547 8.598 L 8.547 8.599 Z M 8.546 8.599 C 7.355 9.318 6.971 10.522 6.559 11.817 L 6.558 11.817 L 6.491 12.029 C 6.461 11.938 6.431 11.847 6.402 11.757 L 6.402 11.756 C 5.992 10.492 5.605 9.302 4.351 8.557 C 5.228 8.378 5.272 7.782 5.278 7.121 C 5.283 6.628 5.481 6.179 5.861 5.837 C 6.275 5.464 6.694 5.459 7.107 5.83 C 7.567 6.243 7.753 6.794 7.715 7.382 C 7.679 7.933 7.855 8.279 8.358 8.469 C 8.396 8.483 8.43 8.509 8.472 8.543 C 8.494 8.56 8.518 8.579 8.546 8.599 Z M 5.053 5.709 C 4.547 6.002 3.924 5.968 3.558 5.636 C 3.257 5.362 3.229 5.037 3.401 4.655 L 4.047 5.067 L 4.048 5.068 Z M 9.416 5.64 C 9.722 5.367 9.743 5.043 9.576 4.654 L 9.576 4.653 L 8.747 5.185 C 8.472 5.361 8.201 5.535 7.928 5.711 C 8.432 5.999 9.05 5.967 9.416 5.64 Z" fill="rgb(0, 0, 0)"></path></svg>',
                                            svgContentId: 9325441830,
                                          },
                                        },
                                        children: r(Rr, {
                                          className: "framer-1dlfuwn",
                                          "data-framer-name": "graphic",
                                          layout: "position",
                                          name: "graphic",
                                          opacity: 1,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 25"><path d="M 2.176 1.509 C 2.323 1.61 2.463 1.712 2.601 1.812 C 2.922 2.047 3.226 2.268 3.557 2.429 C 3.758 2.526 4.159 2.46 4.333 2.305 C 7.782 -0.764 12.229 -0.769 15.622 2.294 C 15.795 2.451 16.191 2.527 16.393 2.435 C 16.718 2.286 17.014 2.073 17.332 1.847 C 17.466 1.751 17.605 1.652 17.75 1.554 C 17.713 1.636 17.679 1.718 17.646 1.797 C 17.575 1.966 17.507 2.127 17.418 2.277 C 16.007 4.646 13.998 6.348 11.655 7.661 C 11.509 7.743 11.238 7.699 11.073 7.614 C 10.339 7.236 9.628 7.241 8.895 7.612 C 8.729 7.696 8.458 7.746 8.314 7.665 C 5.939 6.324 3.898 4.601 2.489 2.174 C 2.41 2.039 2.346 1.893 2.279 1.739 C 2.246 1.665 2.213 1.588 2.176 1.51 Z" fill="rgb(0, 0, 0)"></path><path d="M 0 20.261 L 0.003 20.254 C 0.649 19.724 1.295 19.193 1.955 18.651 L 2.569 18.147 C 2.984 18.837 3.387 19.506 3.792 20.177 L 3.804 20.198 L 3.805 20.199 L 4.557 21.447 L 5.334 20.702 L 5.336 20.699 C 5.774 20.278 6.202 19.867 6.645 19.442 L 7.896 21.522 L 7.909 21.543 C 8.599 22.69 9.286 23.83 9.987 24.995 C 10.686 23.832 11.363 22.706 12.036 21.585 L 12.046 21.568 L 13.324 19.441 C 14.041 20.132 14.707 20.772 15.41 21.447 L 16.053 20.384 L 17.405 18.146 L 18.752 19.259 L 18.799 19.297 L 20 20.289 C 19.872 19.904 19.741 19.527 19.611 19.154 C 19.324 18.327 19.043 17.521 18.816 16.698 C 18.272 14.732 18.204 12.707 18.209 10.673 C 18.211 9.572 18.194 8.462 18.078 7.367 C 17.978 6.406 17.635 5.499 17.11 4.639 C 16.999 4.777 16.896 4.912 16.796 5.042 C 16.577 5.329 16.374 5.595 16.142 5.831 C 15.842 6.135 15.814 6.382 15.983 6.788 C 16.645 8.376 15.93 9.913 14.317 10.435 C 14.072 10.515 13.818 10.563 13.565 10.612 C 13.452 10.634 13.339 10.655 13.227 10.68 C 13.094 11.448 13.263 12.01 14.028 12.349 C 14.457 12.54 14.859 12.795 15.285 13.065 C 15.479 13.187 15.678 13.314 15.887 13.439 C 15.727 13.532 15.568 13.627 15.41 13.724 L 15.409 13.724 C 15.095 13.914 14.807 14.089 14.503 14.229 C 13.342 14.761 12.593 15.684 12.121 16.854 C 11.688 17.931 11.29 19.021 10.927 20.124 C 10.701 20.809 10.506 21.505 10.31 22.201 C 10.222 22.515 10.134 22.829 10.043 23.143 C 9.866 22.868 9.774 22.586 9.683 22.307 C 9.662 22.244 9.642 22.182 9.621 22.121 C 9.456 21.636 9.293 21.152 9.13 20.666 C 8.67 19.299 8.21 17.931 7.702 16.582 C 7.32 15.568 6.616 14.791 5.617 14.32 C 5.269 14.155 4.939 13.951 4.59 13.735 C 4.426 13.632 4.261 13.531 4.095 13.432 C 4.282 13.32 4.467 13.204 4.651 13.086 C 5.037 12.84 5.397 12.611 5.781 12.441 C 6.56 12.097 6.935 11.582 6.737 10.666 C 6.719 10.662 6.698 10.657 6.675 10.652 C 6.614 10.634 6.552 10.623 6.488 10.617 C 4.353 10.466 3.049 8.472 4.081 6.522 C 4.133 6.423 4.135 6.221 4.072 6.14 C 3.778 5.762 3.47 5.395 3.149 5.012 C 3.045 4.888 2.939 4.763 2.833 4.635 C 2.789 4.725 2.747 4.81 2.707 4.891 C 2.617 5.072 2.535 5.234 2.463 5.401 C 1.932 6.617 1.707 7.894 1.742 9.224 C 1.84 12.992 1.67 16.714 0.003 20.254 L 0.001 20.256 Z" fill="rgb(0, 0, 0)"></path><path d="M 13.147 13.435 L 13.15 13.434 L 13.149 13.436 Z M 13.147 13.435 C 11.316 14.559 10.725 16.441 10.09 18.463 L 10.09 18.464 L 9.986 18.795 C 9.94 18.653 9.894 18.511 9.849 18.37 L 9.849 18.368 C 9.218 16.394 8.623 14.534 6.694 13.37 C 8.043 13.09 8.111 12.159 8.121 11.127 C 8.128 10.357 8.432 9.655 9.017 9.121 C 9.654 8.537 10.299 8.53 10.934 9.109 C 11.642 9.754 11.927 10.616 11.869 11.534 C 11.814 12.396 12.085 12.936 12.858 13.232 C 12.917 13.254 12.969 13.296 13.034 13.348 C 13.067 13.375 13.104 13.404 13.147 13.436 Z M 7.774 8.92 C 6.995 9.377 6.037 9.324 5.474 8.806 C 5.01 8.378 4.968 7.87 5.232 7.274 L 6.226 7.918 L 6.227 7.919 Z M 14.487 8.812 C 14.956 8.386 14.989 7.88 14.732 7.272 L 14.732 7.27 L 13.457 8.102 C 13.034 8.377 12.617 8.648 12.196 8.923 C 12.972 9.373 13.923 9.323 14.487 8.812 Z" fill="rgb(0, 0, 0)"></path></svg>',
                                          svgContentId: 11556857342,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                r(Ge, {
                                  href: "https://www.dextools.io",
                                  children: K(J.a, {
                                    className: "framer-1ssbxsu framer-1dzttcd",
                                    "data-border": !0,
                                    whileHover: ht,
                                    children: [
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            children: r(U, {
                                              children: r("p", {
                                                style: {
                                                  "--font-selector":
                                                    "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                  "--framer-font-family":
                                                    '"Comico", sans-serif',
                                                  "--framer-font-size": "12px",
                                                },
                                                children: "DEXTOOLS",
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(Ae, {
                                          __fromCanvasComponent: !0,
                                          children: r(U, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Comico", sans-serif',
                                                "--framer-font-size": "17px",
                                              },
                                              children: "DEXTOOLS",
                                            }),
                                          }),
                                          className: "framer-h7pv7a",
                                          fonts: ["FS;Comico-regular"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      r(oe, {
                                        breakpoint: h,
                                        overrides: {
                                          tXJmDh1vf: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 12"><path d="M 11.354 8.802 C 10.654 9.633 9.796 10.15 8.757 10.369 C 7.707 10.589 6.682 10.484 5.706 10.014 C 4.81 9.583 3.962 9.7 3.209 10.374 C 3.001 10.561 2.798 10.754 2.596 10.947 C 2.489 11.049 2.381 11.151 2.273 11.252 C 1.776 11.717 1.203 11.963 0.5 11.875 C 0.498 11.771 0.566 11.716 0.63 11.663 C 0.65 11.646 0.67 11.63 0.687 11.612 C 1.141 11.157 1.596 10.702 2.05 10.247 C 2.632 9.666 3.213 9.084 3.792 8.502 C 4.659 7.628 5.525 6.753 6.39 5.878 C 6.848 5.415 7.305 4.952 7.763 4.489 C 7.776 4.476 7.793 4.466 7.809 4.456 C 7.817 4.451 7.825 4.446 7.832 4.441 C 7.868 4.403 7.903 4.364 7.939 4.326 C 8.019 4.24 8.099 4.154 8.181 4.07 L 8.435 3.812 C 9.183 3.051 9.933 2.292 10.684 1.533 C 11.709 0.497 13.407 0.757 14.11 2.04 C 14.256 2.306 14.377 2.575 14.467 2.861 C 14.53 3.057 14.525 3.197 14.251 3.22 C 13.596 3.277 13.163 3.655 12.88 4.237 C 12.653 4.706 12.507 5.186 12.536 5.72 C 12.558 6.12 12.493 6.518 12.373 6.903 L 12.373 6.903 C 12.189 7.621 11.836 8.23 11.354 8.802 Z M 11.429 6.444 C 11.612 5.306 11.309 4.318 10.529 3.473 C 10.389 3.321 10.275 3.305 10.128 3.457 C 9.97 3.62 9.807 3.782 9.632 3.927 C 9.473 4.059 9.489 4.155 9.631 4.291 C 9.93 4.578 10.121 4.929 10.211 5.357 C 9.919 5.353 9.648 5.358 9.422 5.541 C 9.192 5.767 9.01 6.046 9.047 6.36 C 9.089 6.716 9.284 7.026 9.644 7.17 C 9.796 7.231 9.786 7.286 9.689 7.389 C 9.28 7.824 8.783 8.074 8.187 8.105 C 7.516 8.142 6.933 7.932 6.469 7.437 C 6.312 7.27 6.2 7.275 6.052 7.441 C 5.944 7.563 5.826 7.675 5.707 7.788 C 5.66 7.833 5.613 7.878 5.566 7.923 C 5.457 8.029 5.453 8.141 5.56 8.246 C 6.175 8.848 6.876 9.278 7.759 9.318 C 9.362 9.39 11.067 8.518 11.429 6.444 Z" fill="rgb(0, 0, 0)"></path></svg>',
                                            svgContentId: 12820222201,
                                          },
                                        },
                                        children: r("img", {
                                          className: "framer-1ujfgrs",
                                          "data-framer-name": "graphic",
                                          layout: "position",
                                          name: "graphic",
                                          opacity: 1,
                                          radius: 0,
                                          src: '/framerusercontent.com/images/dextools.png',
                                          svgContentId: 9995787637,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                r(Ge, {
                                  // href: "www.maker.circlegame.lol",
                                  // openInNewTab: !0,
                                  // children: r(J.a, {
                                  //   className: "framer-5lxbrj framer-1dzttcd",
                                  //   "data-border": !0,
                                  //   whileHover: ht,
                                  //   children: r(oe, {
                                  //     breakpoint: h,
                                  //     overrides: {
                                  //       tXJmDh1vf: {
                                  //         children: r(U, {
                                  //           children: r("p", {
                                  //             style: {
                                  //               "--font-selector":
                                  //                 "RlM7Q29taWNvLXJlZ3VsYXI=",
                                  //               "--framer-font-family":
                                  //                 '"Comico", sans-serif',
                                  //               "--framer-font-size": "12px",
                                  //             },
                                  //             children: "MEME MAKER",
                                  //           }),
                                  //         }),
                                  //       },
                                  //     },
                                  //     children: r(Ae, {
                                  //       __fromCanvasComponent: !0,
                                  //       children: r(U, {
                                  //         children: r("p", {
                                  //           style: {
                                  //             "--font-selector":
                                  //               "RlM7Q29taWNvLXJlZ3VsYXI=",
                                  //             "--framer-font-family":
                                  //               '"Comico", sans-serif',
                                  //             "--framer-font-size": "17px",
                                  //           },
                                  //           children: "MEME MAKER",
                                  //         }),
                                  //       }),
                                  //       className: "framer-1jfs0bf",
                                  //       fonts: ["FS;Comico-regular"],
                                  //       verticalAlignment: "top",
                                  //       withExternalLayout: !0,
                                  //     }),
                                  //   }),
                                  // }),
                                }),
                                r(Ge, {
                                  href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                  openInNewTab: !0,
                                  children: r(J.a, {
                                    className: "framer-txvnbx framer-1dzttcd",
                                    "data-border": !0,
                                    whileHover: ht,
                                    children: r(oe, {
                                      breakpoint: h,
                                      overrides: {
                                        tXJmDh1vf: {
                                          children: r(U, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7Q29taWNvLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Comico", sans-serif',
                                                "--framer-font-size": "12px",
                                              },
                                              children: "BUY ON UNISWAP",
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(Ae, {
                                        __fromCanvasComponent: !0,
                                        children: r(U, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7Q29taWNvLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Comico", sans-serif',
                                              "--framer-font-size": "17px",
                                            },
                                            children: "BUY ON UNISWAP",
                                          }),
                                        }),
                                        className: "framer-1lsf5fb",
                                        fonts: ["FS;Comico-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-1gdp53x-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !1,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 0,
                      height: "100%",
                      hoverFactor: 1,
                      id: "GYZkMlgg9",
                      layoutId: "GYZkMlgg9",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 320,
                            intrinsicWidth: 246,
                            pixelHeight: 640,
                            pixelWidth: 492,
                            sizes: "74px",
                            src: "/framerusercontent.com/images/KPiyl7W2kpbp4F5SLBnnLO7KU4.png?scale-down-to=512",
                            srcSet:
                              "/framerusercontent.com/images/KPiyl7W2kpbp4F5SLBnnLO7KU4.png 492w",
                          },
                          className: "framer-5ogcvl",
                          "data-framer-name": "image",
                          name: "image",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                K(Zr, {
                  __framer__animate: { transition: nt },
                  __framer__animateOnce: !1,
                  __framer__enter: en,
                  __framer__exit: tn,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  className: "framer-rx29t8",
                  style: { transformPerspective: 1200 },
                  children: [
                    K(Zr, {
                      __framer__loop: tl,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: "mirror",
                      __framer__loopTransition: el,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-14dq5ef",
                      children: [
                        r(oe, {
                          breakpoint: h,
                          overrides: {
                            tXJmDh1vf: {
                              children: r(U, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q29taWNvLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Comico", sans-serif',
                                    "--framer-font-size": "26px",
                                  },
                                  children: "CIRCLE GAME ON",
                                }),
                              }),
                            },
                          },
                          children: r(Ae, {
                            __fromCanvasComponent: !0,
                            children: r(U, {
                              children: r("p", {
                                style: {
                                  "--font-selector": "RlM7Q29taWNvLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Comico", sans-serif',
                                  "--framer-font-size": "56px",
                                },
                                children: "CIRCLE GAME ON",
                              }),
                            }),
                            className: "framer-1o926zd",
                            fonts: ["FS;Comico-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(oe, {
                          breakpoint: h,
                          overrides: {
                            tXJmDh1vf: {
                              children: r(U, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "RlM7Q29taWNvLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Comico", sans-serif',
                                    "--framer-font-size": "26px",
                                  },
                                  children: r("span", {
                                    "data-text-fill": "true",
                                    style: {
                                      backgroundImage:
                                        "linear-gradient(270deg, rgb(0, 255, 154) 0%, rgb(240, 0, 255) 100%)",
                                    },
                                    children: "ETHEREUM",
                                  }),
                                }),
                              }),
                            },
                          },
                          children: r(Ae, {
                            __fromCanvasComponent: !0,
                            children: r(U, {
                              children: r("p", {
                                style: {
                                  "--font-selector": "RlM7Q29taWNvLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Comico", sans-serif',
                                  "--framer-font-size": "56px",
                                },
                                children: r("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(270deg, rgb(0, 255, 154) 0%, rgb(240, 0, 255) 100%)",
                                  },
                                  children: "ETHEREUM",
                                }),
                              }),
                            }),
                            className: "framer-1surw06",
                            fonts: ["FS;Comico-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    K("div", {
                      className: "framer-1o15r7v",
                      children: [
                        r(oe, {
                          breakpoint: h,
                          overrides: {
                            tXJmDh1vf: {
                              children: r(U, {
                                children: K("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Coming Soon", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: [
                                    r("strong", {
                                      children: "The Circle Game",
                                    }),
                                    " is a game of peripheral vision, trickery and motor skills. The game starts out when the Offensive Player creates a circle with their thumb and forefinger somewhere below his waist. The goal is to trick another person into looking at his hand. If the victim looks at the hand, he has lost the game, and is subsequently hit on the bicep with a closed fist, by the offensive player. Online, people have begun hiding hands making the circle symbols in various images to trick people into finding it.",
                                  ],
                                }),
                              }),
                            },
                          },
                          children: r(Qr, {
                            __framer__loop: nl,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: rl,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: r(U, {
                              children: K("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-text-alignment": "center",
                                },
                                children: [
                                  r("strong", { children: "The Circle Game" }),
                                  " is a game of peripheral vision, trickery and motor skills. The game starts out when the Offensive Player creates a circle with their thumb and forefinger somewhere below his waist. The goal is to trick another person into looking at his hand. If the victim looks at the hand, he has lost the game, and is subsequently hit on the bicep with a closed fist, by the offensive player. Online, people have begun hiding hands making the circle symbols in various images to trick people into finding it.",
                                ],
                              }),
                            }),
                            className: "framer-1scquiu",
                            fonts: ["GF;Coming Soon-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(D, {
                          children: r(z, {
                            className: "framer-n1nlhx-container",
                            children: r(pt, {
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              borderRadius: 0,
                              bottomLeftRadius: 0,
                              bottomRightRadius: 0,
                              controls: !1,
                              height: "100%",
                              id: "CQXX2FeGy",
                              isMixedBorderRadius: !1,
                              layoutId: "CQXX2FeGy",
                              loop: !0,
                              muted: !0,
                              objectFit: "cover",
                              playing: !0,
                              posterEnabled: !1,
                              srcFile:
                                "/framerusercontent.com/assets/Budb20ETm29x2zgUBNVee5BqnjE.mp4",
                              srcType: "Upload",
                              srcUrl:
                                "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                              startTime: 0,
                              style: { height: "100%", width: "100%" },
                              topLeftRadius: 0,
                              topRightRadius: 0,
                              volume: 25,
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    r(Ge, {
                      href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                      children: r(J.a, {
                        className: "framer-1ybmr98 framer-1dzttcd",
                        "data-border": !0,
                        whileHover: al,
                        children: r(Ae, {
                          __fromCanvasComponent: !0,
                          children: r(U, {
                            children: r("p", {
                              style: {
                                "--font-selector": "RlM7Q29taWNvLXJlZ3VsYXI=",
                                "--framer-font-family": '"Comico", sans-serif',
                                "--framer-font-size": "17px",
                              },
                              children: "buy it now!!",
                            }),
                          }),
                          className: "framer-1jinlox",
                          fonts: ["FS;Comico-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                r(D, {
                  children: r(Ps, {
                    __framer__animate: { transition: nt },
                    __framer__animateOnce: !1,
                    __framer__enter: en,
                    __framer__exit: tn,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-1qj9fc0-container",
                    style: { transformPerspective: 1200 },
                    children: r(Jr, {
                      height: "100%",
                      id: "Thry8FV_1",
                      layoutId: "Thry8FV_1",
                      style: { height: "100%", width: "100%" },
                      theme: "light",
                      url: "https://twitter.com/i/status/1744496232498889181",
                      width: "100%",
                    }),
                  }),
                }),
                K(Zr, {
                  __framer__animate: { transition: nt },
                  __framer__animateOnce: !1,
                  __framer__enter: en,
                  __framer__exit: tn,
                  __framer__styleAppearEffectEnabled: !0,
                  __framer__threshold: 0,
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  className: "framer-5hvf3q",
                  style: { transformPerspective: 1200 },
                  children: [
                    r(D, {
                      children: r(z, {
                        className: "framer-1m27fcl-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/XvY0TIcHhpFZm0nI03tCOnJ0tg.webp",
                              srcSet:
                                "/framerusercontent.com/images/XvY0TIcHhpFZm0nI03tCOnJ0tg.webp 500w",
                            },
                            ""
                          ),
                          id: "MY5N4CFc6",
                          layoutId: "MY5N4CFc6",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-axmuiz-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/KTDtX9maXOeAN4sjOcCrNF3gw.png",
                              srcSet:
                                "/framerusercontent.com/images/KTDtX9maXOeAN4sjOcCrNF3gw.png 703w",
                            },
                            ""
                          ),
                          id: "LvCmiULMy",
                          layoutId: "LvCmiULMy",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-hmatvl-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/KUvoAzBz5cr3W2PHWnWUv6Em928.webp",
                              srcSet:
                                "/framerusercontent.com/images/KUvoAzBz5cr3W2PHWnWUv6Em928.webp 507w",
                            },
                            ""
                          ),
                          id: "rdx7QM5K4",
                          layoutId: "rdx7QM5K4",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-kjn4lf-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png",
                              srcSet:
                                "/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png?scale-down-to=512 512w,/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png?scale-down-to=1024 1024w,/framerusercontent.com/images/3B0GFCNp3y47LNLp1rrjt6l18k.png 1031w",
                            },
                            ""
                          ),
                          id: "rcIQOq7u6",
                          layoutId: "rcIQOq7u6",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-bzx2zp-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png",
                              srcSet:
                                "/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png?scale-down-to=512 512w,/framerusercontent.com/images/3tmGu5VWVq9BvBA6plR4lsLxtuk.png 896w",
                            },
                            ""
                          ),
                          id: "BU9WxLDNi",
                          layoutId: "BU9WxLDNi",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-seheyq-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/N2YpMoF9CUPuTtKtDNFI7JOc.jpg",
                            },
                            ""
                          ),
                          id: "gq9Vu71M6",
                          layoutId: "gq9Vu71M6",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-in3yi0-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/kp1KuUiwi0GGRHBBuheJri7d4.png",
                              srcSet:
                                "/framerusercontent.com/images/kp1KuUiwi0GGRHBBuheJri7d4.png?scale-down-to=512 512w,/framerusercontent.com/images/kp1KuUiwi0GGRHBBuheJri7d4.png 601w",
                            },
                            ""
                          ),
                          id: "sxK07JUR0",
                          layoutId: "sxK07JUR0",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-175ho7g-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg",
                              srcSet:
                                "/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg?scale-down-to=512 512w,/framerusercontent.com/images/ueYy7xmwr6fRPgivcKnfAdYVsE.jpg 679w",
                            },
                            ""
                          ),
                          id: "q4p4SbXkC",
                          layoutId: "q4p4SbXkC",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-1ogvlom-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/0TeI73CGhhama0EZeMBVWjzybc0.jpg",
                              srcSet:
                                "/framerusercontent.com/images/0TeI73CGhhama0EZeMBVWjzybc0.jpg 433w",
                            },
                            ""
                          ),
                          id: "pzVZKkF6M",
                          layoutId: "pzVZKkF6M",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-1e51mc1-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/EYYigOSSQweQ0QrJP4hZd15OFXs.jpg",
                              srcSet:
                                "/framerusercontent.com/images/EYYigOSSQweQ0QrJP4hZd15OFXs.jpg?scale-down-to=512 512w,/framerusercontent.com/images/EYYigOSSQweQ0QrJP4hZd15OFXs.jpg 718w",
                            },
                            ""
                          ),
                          id: "SjsofrRKz",
                          layoutId: "SjsofrRKz",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-jdjhtg-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/yGxcysPOOkD1U8F91qsmGYFZk2k.jpg",
                            },
                            ""
                          ),
                          id: "EtvrR2FVA",
                          layoutId: "EtvrR2FVA",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-u5g4r7-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/i396vp7XogYIoAigi3pddzAzU.jpg",
                              srcSet:
                                "/framerusercontent.com/images/i396vp7XogYIoAigi3pddzAzU.jpg 586w",
                            },
                            ""
                          ),
                          id: "omxCpkgql",
                          layoutId: "omxCpkgql",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-39z982-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/3cU0PC44fLNyBzUKJsRtPeu5is.png",
                              srcSet:
                                "/framerusercontent.com/images/3cU0PC44fLNyBzUKJsRtPeu5is.png?scale-down-to=512 512w,/framerusercontent.com/images/3cU0PC44fLNyBzUKJsRtPeu5is.png 601w",
                            },
                            ""
                          ),
                          id: "l9aj8RUdS",
                          layoutId: "l9aj8RUdS",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-1rxgvbn-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/GLJrnlVpKlp5vur6owj7Czr1M.png",
                              srcSet:
                                "/framerusercontent.com/images/GLJrnlVpKlp5vur6owj7Czr1M.png?scale-down-to=512 512w,/framerusercontent.com/images/GLJrnlVpKlp5vur6owj7Czr1M.png 1000w",
                            },
                            ""
                          ),
                          id: "eVzcIZLLn",
                          layoutId: "eVzcIZLLn",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-gbkgon-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/bwITtOy4PGyiLzMOgbdDAE5Bc.jpg",
                              srcSet:
                                "/framerusercontent.com/images/bwITtOy4PGyiLzMOgbdDAE5Bc.jpg?scale-down-to=1024 946w,/framerusercontent.com/images/bwITtOy4PGyiLzMOgbdDAE5Bc.jpg 1080w",
                            },
                            ""
                          ),
                          id: "vbMrgjGZ_",
                          layoutId: "vbMrgjGZ_",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-1l6mmaj-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/8nyfD3BeGHYHOvCeQEfP22n34g0.png",
                              srcSet:
                                "/framerusercontent.com/images/8nyfD3BeGHYHOvCeQEfP22n34g0.png?scale-down-to=512 512w,/framerusercontent.com/images/8nyfD3BeGHYHOvCeQEfP22n34g0.png 514w",
                            },
                            ""
                          ),
                          id: "DnzxEnQtt",
                          layoutId: "DnzxEnQtt",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-zegrx6-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/gqFwzqR8UDqCjH5bkG6svIPo0.png",
                            },
                            ""
                          ),
                          id: "NJNeF6hqd",
                          layoutId: "NJNeF6hqd",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                    r(D, {
                      children: r(z, {
                        className: "framer-14gavyj-container",
                        children: r(ce, {
                          height: "100%",
                          hXXOYUFBx: he(
                            {
                              src: "/framerusercontent.com/images/CqdNkc5o9eG4u11pZfIX5Ue0a4M.png",
                            },
                            ""
                          ),
                          id: "fWeYnVzpn",
                          layoutId: "fWeYnVzpn",
                          variant: "tvIEwISwc",
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                K("div", {
                  className: "framer-2zzbrf",
                  children: [
                    r(oe, {
                      breakpoint: h,
                      overrides: {
                        tXJmDh1vf: {
                          children: r(U, {
                            children: r("p", {
                              style: {
                                "--font-selector": "RlM7Q29taWNvLXJlZ3VsYXI=",
                                "--framer-font-family": '"Comico", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-text-alignment": "center",
                              },
                              children:
                                "SORRY MATE, YOU LOOKED NOW YOU MUST APE",
                            }),
                          }),
                        },
                      },
                      children: r(Ae, {
                        __fromCanvasComponent: !0,
                        children: r(U, {
                          children: r("p", {
                            style: {
                              "--font-selector": "RlM7Q29taWNvLXJlZ3VsYXI=",
                              "--framer-font-family": '"Comico", sans-serif',
                              "--framer-font-size": "36px",
                            },
                            children: "SORRY MATE, YOU LOOKED NOW YOU MUST APE",
                          }),
                        }),
                        className: "framer-v0674d",
                        fonts: ["FS;Comico-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    r(Ls, {
                      __framer__loop: cr,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: "mirror",
                      __framer__loopTransition: ol,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 176,
                        intrinsicWidth: 235,
                        loading: "lazy",
                        pixelHeight: 352,
                        pixelWidth: 470,
                        src: "/framerusercontent.com/images/ViUuwAjIY6sMNEVSPcuZWmvRk.jpeg",
                      },
                      className: "framer-4qpjfq",
                      "data-framer-name": "photo_2024_01_08_9_01_05_p_m_",
                      name: "photo_2024_01_08_9_01_05_p_m_",
                    }),
                    r(Ae, {
                      __fromCanvasComponent: !0,
                      children: r(U, {
                        children: r("p", {
                          style: {
                            "--font-selector":
                              "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                            "--framer-font-family": '"Coming Soon", sans-serif',
                            "--framer-font-size": "23px",
                          },
                          children: "@2024 $circlegame All Right Reserved",
                        }),
                      }),
                      className: "framer-1sx5w0c",
                      fonts: ["GF;Coming Soon-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-15lg3ur-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "left",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 800,
                      height: "100%",
                      hoverFactor: 1,
                      id: "HD3s6_h3o",
                      layoutId: "HD3s6_h3o",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(Te, {
                          __framer__loop: sl,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: il,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 360,
                            intrinsicWidth: 640,
                            pixelHeight: 720,
                            pixelWidth: 1280,
                            sizes: "276px",
                            src: "/framerusercontent.com/images/tQEgIZ3UEITNVYSwwSnSSb1Vw.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/tQEgIZ3UEITNVYSwwSnSSb1Vw.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/tQEgIZ3UEITNVYSwwSnSSb1Vw.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/tQEgIZ3UEITNVYSwwSnSSb1Vw.jpeg 1280w",
                          },
                          className: "framer-nx34rw",
                          "data-framer-name": "photo_2024_01_08_11_27_03_p_m_",
                          name: "photo_2024_01_08_11_27_03_p_m_",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-q36ke6-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "top",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 700,
                      height: "100%",
                      hoverFactor: 1,
                      id: "hh0Tgkkm4",
                      layoutId: "hh0Tgkkm4",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 180,
                            intrinsicWidth: 270,
                            pixelHeight: 360,
                            pixelWidth: 540,
                            sizes: "270px",
                            src: "/framerusercontent.com/images/MJF2FUosbCTtNdHry03aXHEvQ.jpeg?scale-down-to=512",
                            srcSet:
                              "/framerusercontent.com/images/MJF2FUosbCTtNdHry03aXHEvQ.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/MJF2FUosbCTtNdHry03aXHEvQ.jpeg 540w",
                          },
                          className: "framer-11eglek",
                          "data-framer-name": " m1",
                          name: " m1",
                        }),
                      ],
                      speed: 50,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-1xte753-container",
                    children: r(be, {
                      alignment: "flex-end",
                      direction: "right",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 800,
                      height: "100%",
                      hoverFactor: 1,
                      id: "oz6J2nHDH",
                      layoutId: "oz6J2nHDH",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 640,
                            intrinsicWidth: 640,
                            pixelHeight: 1280,
                            pixelWidth: 1280,
                            sizes: "113px",
                            src: "/framerusercontent.com/images/eSCEcAJOdk0L1g41cWX2PSkjs.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/eSCEcAJOdk0L1g41cWX2PSkjs.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/eSCEcAJOdk0L1g41cWX2PSkjs.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/eSCEcAJOdk0L1g41cWX2PSkjs.jpeg 1280w",
                          },
                          className: "framer-s8oooj",
                          "data-framer-name": "photo_2024_01_08_11_33_57_p_m_",
                          name: "photo_2024_01_08_11_33_57_p_m_",
                        }),
                      ],
                      speed: 300,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-feqt8w-container",
                    style: { rotate: -51 },
                    children: r(be, {
                      alignment: "flex-end",
                      direction: "right",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 800,
                      height: "100%",
                      hoverFactor: 1,
                      id: "Q6KwdNCM9",
                      layoutId: "Q6KwdNCM9",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 451.5,
                            intrinsicWidth: 585,
                            pixelHeight: 903,
                            pixelWidth: 1170,
                            sizes: "210px",
                            src: "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg 1170w",
                          },
                          className: "framer-1mrk8mq",
                          "data-framer-name": "photo_2024_01_08_11_33_40_p_m_",
                          name: "photo_2024_01_08_11_33_40_p_m_",
                        }),
                      ],
                      speed: 180,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-o1vwvd-container",
                    style: { rotate: -51 },
                    children: r(be, {
                      alignment: "flex-end",
                      direction: "right",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 800,
                      height: "100%",
                      hoverFactor: 1,
                      id: "MKwIqzNBY",
                      layoutId: "MKwIqzNBY",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 451.5,
                            intrinsicWidth: 585,
                            pixelHeight: 903,
                            pixelWidth: 1170,
                            sizes: "210px",
                            src: "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg 1170w",
                          },
                          className: "framer-1mrk8mq",
                          "data-framer-name": "photo_2024_01_08_11_33_40_p_m_",
                          name: "photo_2024_01_08_11_33_40_p_m_",
                        }),
                      ],
                      speed: 180,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-157zq4f-container",
                    style: { rotate: -51 },
                    children: r(be, {
                      alignment: "flex-end",
                      direction: "right",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 800,
                      height: "100%",
                      hoverFactor: 1,
                      id: "b0oOX8elm",
                      layoutId: "b0oOX8elm",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 451.5,
                            intrinsicWidth: 585,
                            pixelHeight: 903,
                            pixelWidth: 1170,
                            sizes: "210px",
                            src: "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/UdwkkFOOhj1oSrBz6YMHPzuukC8.jpeg 1170w",
                          },
                          className: "framer-1mrk8mq",
                          "data-framer-name": "photo_2024_01_08_11_33_40_p_m_",
                          name: "photo_2024_01_08_11_33_40_p_m_",
                        }),
                      ],
                      speed: 180,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-1y53qyu-container",
                    style: { rotate: 414 },
                    children: r(be, {
                      alignment: "flex-end",
                      direction: "right",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 797,
                      height: "100%",
                      hoverFactor: 0.9,
                      id: "hH3LiOeMF",
                      layoutId: "hH3LiOeMF",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 127.5,
                            intrinsicWidth: 118,
                            pixelHeight: 255,
                            pixelWidth: 236,
                            src: "/framerusercontent.com/images/N2YpMoF9CUPuTtKtDNFI7JOc.jpg",
                          },
                          className: "framer-zpspu6",
                          "data-framer-name": "$16",
                          name: "$16",
                        }),
                      ],
                      speed: 600,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r(D, {
                  children: r(z, {
                    className: "framer-jhx0xn-container",
                    children: r(be, {
                      alignment: "center",
                      direction: "top",
                      fadeOptions: {
                        fadeAlpha: 0,
                        fadeContent: !0,
                        fadeInset: 0,
                        fadeWidth: 25,
                        overflow: !1,
                      },
                      gap: 605,
                      height: "100%",
                      hoverFactor: 1,
                      id: "EJXQaNB2m",
                      layoutId: "EJXQaNB2m",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      sizingOptions: { heightType: !0, widthType: !0 },
                      slots: [
                        r(we, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 330,
                            intrinsicWidth: 585,
                            pixelHeight: 660,
                            pixelWidth: 1170,
                            sizes: "207px",
                            src: "/framerusercontent.com/images/yqMKZ4Vxz8wG364wM3PO98qVT6I.jpeg?scale-down-to=1024",
                            srcSet:
                              "/framerusercontent.com/images/yqMKZ4Vxz8wG364wM3PO98qVT6I.jpeg?scale-down-to=512 512w,/framerusercontent.com/images/yqMKZ4Vxz8wG364wM3PO98qVT6I.jpeg?scale-down-to=1024 1024w,/framerusercontent.com/images/yqMKZ4Vxz8wG364wM3PO98qVT6I.jpeg 1170w",
                          },
                          className: "framer-1whbv82",
                          "data-framer-name": "photo_2024_01_08_11_26_57_p_m_",
                          name: "photo_2024_01_08_11_26_57_p_m_",
                        }),
                      ],
                      speed: 100,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            r("div", { className: Ze(Va, ...p), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  ul = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Da.bodyClassName}-framer-7XAHj { background: white; }`,
    ".framer-7XAHj.framer-1dzttcd, .framer-7XAHj .framer-1dzttcd { display: block; }",
    ".framer-7XAHj.framer-bdfu8i { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-7XAHj .framer-1jiuflo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 52%; overflow: hidden; padding: 0px; position: absolute; top: 432px; transform: translateX(-50%); width: min-content; z-index: 2; }",
    ".framer-7XAHj .framer-16mzuur { aspect-ratio: 0.4731051344743276 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 184px); overflow: visible; position: relative; width: 87px; }",
    ".framer-7XAHj .framer-1dbyig7 { aspect-ratio: 0.4756756756756757 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 211px); overflow: visible; position: relative; width: 100px; }",
    ".framer-7XAHj .framer-sii6w9 { aspect-ratio: 1.036963036963037 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 229px); overflow: visible; position: relative; width: 237px; }",
    ".framer-7XAHj .framer-1eatzsf { aspect-ratio: 0.755656108597285 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 221px); overflow: visible; position: relative; width: 167px; }",
    ".framer-7XAHj .framer-3awfu0 { aspect-ratio: 0.4563758389261745 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 228px); overflow: visible; position: relative; width: 104px; }",
    ".framer-7XAHj .framer-1uq27c4 { aspect-ratio: 1.3834886817576564 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 188px); overflow: visible; position: relative; width: 259px; }",
    ".framer-7XAHj .framer-18gha0r-container { flex: none; height: 832px; left: -37px; opacity: 0.6; position: fixed; right: -37px; top: 0px; z-index: 0; }",
    ".framer-7XAHj .framer-ubgo6o { aspect-ratio: 0.9106217616580311 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 178px); left: -173px; overflow: visible; position: absolute; top: -102px; width: 162px; z-index: 1; }",
    ".framer-7XAHj .framer-1a12bw { aspect-ratio: 1.1428571428571428 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 99px); left: 701px; overflow: visible; position: absolute; top: -110px; width: 113px; z-index: 2; }",
    ".framer-7XAHj .framer-1dtykhb-container { flex: none; height: 200px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 1809px; width: 100%; z-index: 4; }",
    ".framer-7XAHj .framer-1bdlfe0 { aspect-ratio: 0.61875 / 1; height: var(--framer-aspect-ratio-supported, 227px); overflow: visible; position: relative; width: 140px; }",
    ".framer-7XAHj .framer-s86oyk-container { flex: none; height: 228px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 4; }",
    ".framer-7XAHj .framer-1ihbi85 { aspect-ratio: 0.99 / 1; height: var(--framer-aspect-ratio-supported, 272px); overflow: visible; position: relative; width: 269px; }",
    ".framer-7XAHj .framer-1h5eas2 { aspect-ratio: 1.0058536585365854 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 168px); left: -135px; overflow: visible; position: absolute; top: 646px; width: 169px; z-index: 1; }",
    ".framer-7XAHj .framer-1bc3443 { aspect-ratio: 1.502212389380531 / 1; bottom: 875px; flex: none; height: var(--framer-aspect-ratio-supported, 154px); overflow: visible; position: absolute; right: -166px; width: 231px; z-index: 2; }",
    ".framer-7XAHj .framer-1mpgas3 { aspect-ratio: 1.75 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 800px); left: -100px; opacity: 0.1; overflow: visible; position: fixed; right: -100px; top: 0px; z-index: 0; }",
    ".framer-7XAHj .framer-p0x6zm { aspect-ratio: 0.8064516129032258 / 1; bottom: -54px; flex: none; height: var(--framer-aspect-ratio-supported, 324px); left: -223px; overflow: visible; position: absolute; width: 261px; z-index: 1; }",
    ".framer-7XAHj .framer-1rgvmx6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-1rodly3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; height: min-content; justify-content: center; overflow: hidden; padding: 50px; position: relative; width: min-content; z-index: 1; }",
    ".framer-7XAHj .framer-yhf51r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-ircu4w, .framer-7XAHj .framer-de5smv, .framer-7XAHj .framer-pj344b, .framer-7XAHj .framer-iy1kax, .framer-7XAHj .framer-1c2vyxe, .framer-7XAHj .framer-h7pv7a, .framer-7XAHj .framer-1jfs0bf, .framer-7XAHj .framer-1lsf5fb, .framer-7XAHj .framer-1o926zd, .framer-7XAHj .framer-1surw06, .framer-7XAHj .framer-1jinlox, .framer-7XAHj .framer-v0674d, .framer-7XAHj .framer-1sx5w0c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-7XAHj .framer-no0l5f { aspect-ratio: 1.1887417218543046 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 477px); overflow: visible; position: relative; width: 567px; z-index: 2; }",
    ".framer-7XAHj .framer-xmiud5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 772px; word-break: break-word; word-wrap: break-word; }",
    ".framer-7XAHj .framer-h3rxck { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-a7a3wv, .framer-7XAHj .framer-qnswnm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-440tzf, .framer-7XAHj .framer-1u8njyo, .framer-7XAHj .framer-1tdwjxn, .framer-7XAHj .framer-1ssbxsu, .framer-7XAHj .framer-5lxbrj, .framer-7XAHj .framer-txvnbx, .framer-7XAHj .framer-1ybmr98 { --border-bottom-width: 2px; --border-color: #222222; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #00ff9a; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 14px 8px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-7XAHj .framer-sg97ew-container, .framer-7XAHj .framer-1hbw5au-container { flex: none; height: 27px; position: relative; width: 25px; }",
    ".framer-7XAHj .framer-1dlfuwn { background-color: rgba(0, 0, 0, 0); flex: none; height: 25px; position: relative; width: 20px; }",
    ".framer-7XAHj .framer-1ujfgrs { flex: none; height: 24px; position: relative; width: 30px; }",
    ".framer-7XAHj .framer-1gdp53x-container { flex: none; height: 107px; position: relative; width: 100%; z-index: 1; }",
    ".framer-7XAHj .framer-5ogcvl { aspect-ratio: 0.76875 / 1; height: var(--framer-aspect-ratio-supported, 97px); overflow: visible; position: relative; width: 74px; }",
    ".framer-7XAHj .framer-rx29t8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 34px; position: relative; width: min-content; z-index: 3; }",
    ".framer-7XAHj .framer-14dq5ef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-1o15r7v { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-7XAHj .framer-1scquiu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-7XAHj .framer-n1nlhx-container { flex: none; height: 379px; position: relative; width: 460px; }",
    ".framer-7XAHj .framer-1qj9fc0-container { flex: none; height: 636px; position: relative; width: 400px; }",
    ".framer-7XAHj .framer-5hvf3q { display: grid; flex: none; gap: 34px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-1m27fcl-container, .framer-7XAHj .framer-axmuiz-container, .framer-7XAHj .framer-hmatvl-container, .framer-7XAHj .framer-kjn4lf-container, .framer-7XAHj .framer-bzx2zp-container, .framer-7XAHj .framer-seheyq-container, .framer-7XAHj .framer-in3yi0-container, .framer-7XAHj .framer-175ho7g-container, .framer-7XAHj .framer-1ogvlom-container, .framer-7XAHj .framer-1e51mc1-container, .framer-7XAHj .framer-jdjhtg-container, .framer-7XAHj .framer-u5g4r7-container, .framer-7XAHj .framer-39z982-container, .framer-7XAHj .framer-1rxgvbn-container, .framer-7XAHj .framer-gbkgon-container, .framer-7XAHj .framer-1l6mmaj-container, .framer-7XAHj .framer-zegrx6-container, .framer-7XAHj .framer-14gavyj-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; z-index: 1; }",
    ".framer-7XAHj .framer-2zzbrf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: center; overflow: hidden; padding: 37px; position: relative; width: min-content; }",
    ".framer-7XAHj .framer-4qpjfq { aspect-ratio: 1.3352272727272727 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 176px); overflow: visible; position: relative; width: 235px; }",
    ".framer-7XAHj .framer-15lg3ur-container { flex: none; height: 156px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 364px; width: 100%; z-index: 1; }",
    ".framer-7XAHj .framer-nx34rw { aspect-ratio: 1.7777777777777777 / 1; height: var(--framer-aspect-ratio-supported, 156px); overflow: visible; position: relative; width: 276px; z-index: 1; }",
    ".framer-7XAHj .framer-q36ke6-container { flex: none; height: 1070px; left: 0px; position: absolute; top: 0px; width: 28%; z-index: 1; }",
    ".framer-7XAHj .framer-11eglek { aspect-ratio: 1.5 / 1; height: var(--framer-aspect-ratio-supported, 180px); overflow: visible; position: relative; width: 270px; }",
    ".framer-7XAHj .framer-1xte753-container { flex: none; height: 156px; position: absolute; right: -14px; top: 603px; width: 100%; z-index: 1; }",
    ".framer-7XAHj .framer-s8oooj { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 113px); overflow: visible; position: relative; width: 113px; }",
    ".framer-7XAHj .framer-feqt8w-container, .framer-7XAHj .framer-1y53qyu-container { flex: none; height: 151px; left: calc(50.416666666666686% - 166.83333333333331% / 2); position: absolute; top: 689px; width: 167%; z-index: 1; }",
    ".framer-7XAHj .framer-1mrk8mq { aspect-ratio: 1.2956810631229236 / 1; height: var(--framer-aspect-ratio-supported, 162px); overflow: visible; position: relative; width: 210px; }",
    ".framer-7XAHj .framer-o1vwvd-container { flex: none; height: 151px; left: calc(50.00000000000002% - 166.83333333333331% / 2); position: absolute; top: calc(49.28404928404931% - 151px / 2); width: 167%; z-index: 1; }",
    ".framer-7XAHj .framer-157zq4f-container { bottom: 1019px; flex: none; height: 151px; position: absolute; right: -471px; width: 167%; z-index: 1; }",
    ".framer-7XAHj .framer-zpspu6 { aspect-ratio: 0.9254901960784314 / 1; height: var(--framer-aspect-ratio-supported, 128px); overflow: visible; position: relative; width: 118px; }",
    ".framer-7XAHj .framer-jhx0xn-container { flex: none; height: 799px; position: absolute; right: 0px; top: 17px; width: 18%; z-index: 1; }",
    ".framer-7XAHj .framer-1whbv82 { aspect-ratio: 1.7727272727272727 / 1; height: var(--framer-aspect-ratio-supported, 117px); overflow: visible; position: relative; width: 207px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-7XAHj.framer-bdfu8i, .framer-7XAHj .framer-1jiuflo, .framer-7XAHj .framer-1rgvmx6, .framer-7XAHj .framer-1rodly3, .framer-7XAHj .framer-yhf51r, .framer-7XAHj .framer-h3rxck, .framer-7XAHj .framer-a7a3wv, .framer-7XAHj .framer-440tzf, .framer-7XAHj .framer-1u8njyo, .framer-7XAHj .framer-qnswnm, .framer-7XAHj .framer-1tdwjxn, .framer-7XAHj .framer-1ssbxsu, .framer-7XAHj .framer-5lxbrj, .framer-7XAHj .framer-txvnbx, .framer-7XAHj .framer-rx29t8, .framer-7XAHj .framer-14dq5ef, .framer-7XAHj .framer-1o15r7v, .framer-7XAHj .framer-1ybmr98, .framer-7XAHj .framer-2zzbrf { gap: 0px; } .framer-7XAHj.framer-bdfu8i > * { margin: 0px; margin-bottom: calc(42px / 2); margin-top: calc(42px / 2); } .framer-7XAHj.framer-bdfu8i > :first-child, .framer-7XAHj .framer-1rodly3 > :first-child, .framer-7XAHj .framer-yhf51r > :first-child, .framer-7XAHj .framer-rx29t8 > :first-child, .framer-7XAHj .framer-1o15r7v > :first-child, .framer-7XAHj .framer-2zzbrf > :first-child { margin-top: 0px; } .framer-7XAHj.framer-bdfu8i > :last-child, .framer-7XAHj .framer-1rodly3 > :last-child, .framer-7XAHj .framer-yhf51r > :last-child, .framer-7XAHj .framer-rx29t8 > :last-child, .framer-7XAHj .framer-1o15r7v > :last-child, .framer-7XAHj .framer-2zzbrf > :last-child { margin-bottom: 0px; } .framer-7XAHj .framer-1jiuflo > *, .framer-7XAHj .framer-1rgvmx6 > *, .framer-7XAHj .framer-a7a3wv > *, .framer-7XAHj .framer-440tzf > *, .framer-7XAHj .framer-1u8njyo > *, .framer-7XAHj .framer-qnswnm > *, .framer-7XAHj .framer-1tdwjxn > *, .framer-7XAHj .framer-1ssbxsu > *, .framer-7XAHj .framer-5lxbrj > *, .framer-7XAHj .framer-txvnbx > *, .framer-7XAHj .framer-1ybmr98 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-7XAHj .framer-1jiuflo > :first-child, .framer-7XAHj .framer-1rgvmx6 > :first-child, .framer-7XAHj .framer-h3rxck > :first-child, .framer-7XAHj .framer-a7a3wv > :first-child, .framer-7XAHj .framer-440tzf > :first-child, .framer-7XAHj .framer-1u8njyo > :first-child, .framer-7XAHj .framer-qnswnm > :first-child, .framer-7XAHj .framer-1tdwjxn > :first-child, .framer-7XAHj .framer-1ssbxsu > :first-child, .framer-7XAHj .framer-5lxbrj > :first-child, .framer-7XAHj .framer-txvnbx > :first-child, .framer-7XAHj .framer-14dq5ef > :first-child, .framer-7XAHj .framer-1ybmr98 > :first-child { margin-left: 0px; } .framer-7XAHj .framer-1jiuflo > :last-child, .framer-7XAHj .framer-1rgvmx6 > :last-child, .framer-7XAHj .framer-h3rxck > :last-child, .framer-7XAHj .framer-a7a3wv > :last-child, .framer-7XAHj .framer-440tzf > :last-child, .framer-7XAHj .framer-1u8njyo > :last-child, .framer-7XAHj .framer-qnswnm > :last-child, .framer-7XAHj .framer-1tdwjxn > :last-child, .framer-7XAHj .framer-1ssbxsu > :last-child, .framer-7XAHj .framer-5lxbrj > :last-child, .framer-7XAHj .framer-txvnbx > :last-child, .framer-7XAHj .framer-14dq5ef > :last-child, .framer-7XAHj .framer-1ybmr98 > :last-child { margin-right: 0px; } .framer-7XAHj .framer-1rodly3 > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-7XAHj .framer-yhf51r > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-7XAHj .framer-h3rxck > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-7XAHj .framer-rx29t8 > *, .framer-7XAHj .framer-1o15r7v > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7XAHj .framer-14dq5ef > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-7XAHj .framer-2zzbrf > * { margin: 0px; margin-bottom: calc(29px / 2); margin-top: calc(29px / 2); } }",
    "@media (min-width: 1200px) { .framer-7XAHj .hidden-bdfu8i { display: none !important; } }",
    `@media (max-width: 1199px) { .framer-7XAHj .hidden-64xbw9 { display: none !important; } .${Da.bodyClassName}-framer-7XAHj { background: white; } .framer-7XAHj.framer-bdfu8i { width: 390px; } .framer-7XAHj .framer-1jiuflo { flex-direction: column; left: 50%; top: -64px; } .framer-7XAHj .framer-1dbyig7 { height: var(--framer-aspect-ratio-supported, 210px); } .framer-7XAHj .framer-1dtykhb-container { top: calc(48.53380546641587% - 200px / 2); } .framer-7XAHj .framer-1mpgas3 { height: var(--framer-aspect-ratio-supported, 937px); left: -624px; right: -625px; top: -47px; } .framer-7XAHj .framer-1rgvmx6 { z-index: 4; } .framer-7XAHj .framer-no0l5f { height: var(--framer-aspect-ratio-supported, 245px); width: 291px; } .framer-7XAHj .framer-xmiud5 { width: 311px; } .framer-7XAHj .framer-h3rxck { flex-direction: column; gap: 14px; z-index: 8; } .framer-7XAHj .framer-a7a3wv, .framer-7XAHj .framer-qnswnm { flex-direction: column; } .framer-7XAHj .framer-440tzf, .framer-7XAHj .framer-1u8njyo, .framer-7XAHj .framer-1tdwjxn, .framer-7XAHj .framer-1ssbxsu, .framer-7XAHj .framer-5lxbrj, .framer-7XAHj .framer-txvnbx { width: 132px; } .framer-7XAHj .framer-sg97ew-container { height: 15px; width: 14px; } .framer-7XAHj .framer-1hbw5au-container { height: 18px; width: 17px; } .framer-7XAHj .framer-1dlfuwn { height: 16px; width: 13px; } .framer-7XAHj .framer-1ujfgrs { height: 12px; width: 15px; } .framer-7XAHj .framer-rx29t8, .framer-7XAHj .framer-1o15r7v { width: 100%; } .framer-7XAHj .framer-1o926zd { text-shadow: 0px 1px 1px #ffffff; } .framer-7XAHj .framer-1scquiu { width: 324px; } .framer-7XAHj .framer-n1nlhx-container { height: 258px; width: 301px; } .framer-7XAHj .framer-1qj9fc0-container { height: 535px; width: 336px; } .framer-7XAHj .framer-5hvf3q { gap: 0px; grid-template-columns: repeat(2, minmax(200px, 1fr)); } .framer-7XAHj .framer-v0674d { white-space: pre-wrap; width: 315px; word-break: break-word; word-wrap: break-word; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-7XAHj .framer-1jiuflo, .framer-7XAHj .framer-h3rxck, .framer-7XAHj .framer-a7a3wv, .framer-7XAHj .framer-qnswnm, .framer-7XAHj .framer-5hvf3q { gap: 0px; } .framer-7XAHj .framer-1jiuflo > *, .framer-7XAHj .framer-a7a3wv > *, .framer-7XAHj .framer-qnswnm > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7XAHj .framer-1jiuflo > :first-child, .framer-7XAHj .framer-h3rxck > :first-child, .framer-7XAHj .framer-a7a3wv > :first-child, .framer-7XAHj .framer-qnswnm > :first-child { margin-top: 0px; } .framer-7XAHj .framer-1jiuflo > :last-child, .framer-7XAHj .framer-h3rxck > :last-child, .framer-7XAHj .framer-a7a3wv > :last-child, .framer-7XAHj .framer-qnswnm > :last-child { margin-bottom: 0px; } .framer-7XAHj .framer-h3rxck > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-7XAHj .framer-5hvf3q > *, .framer-7XAHj .framer-5hvf3q > :first-child, .framer-7XAHj .framer-5hvf3q > :last-child { margin: 0px; } }}`,
    '.framer-7XAHj[data-border="true"]::after, .framer-7XAHj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  fr = ft(fl, ul, "framer-7XAHj"),
  g1 = fr;
fr.displayName = "Page";
fr.defaultProps = { height: 4504.5, width: 1200 };
Yt(
  fr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Comico",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/JG4NGFFWT2HJYB7L7ZXECL4KOOUIMEUO/RGWEPIOJPQ67UAWIIZDGD3UYLRP6VDWK/SC6IR6E3ASQGIEU7T7E4OJ3CQML6SVGO.woff2",
          weight: "400",
        },
        {
          family: "Comic Neue",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_xHMwp5eLwtHJlc.woff2",
          weight: "700",
        },
        {
          family: "Coming Soon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/comingsoon/v19/qWcuB6mzpYL7AJ2VfdQR1u-XUjjzsykh.woff2",
          weight: "400",
        },
      ],
    },
    ...Os,
    ...Es,
    ...Rs,
    ...js,
    ...Fs,
    ...Ms,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var y1 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerkzTDffBi9",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1200",
        framerImmutableVariables: "true",
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tXJmDh1vf":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "4504.5",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { y1 as __FramerMetadata__, g1 as default };
//# sourceMappingURL=zOWhDaD4HNGlqHk2TOr3s3Gh4JfffpsW8vjMDeBYvpk.MXLQHK7M.mjs.map
