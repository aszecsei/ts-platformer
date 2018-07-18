import Vector2 from './math/vector2'

export enum Key {
  BACKSPACE = 8,
  TAB = 9,
  ENTER = 13,
  SHIFT = 16,
  CTRL = 17,
  ALT = 18,
  PAUSE_BREAK = 19,
  CAPS_LOCK = 20,
  ESCAPE = 27,
  SPACE = 32,
  PAGE_UP = 33,
  PAGE_DOWN = 34,
  END = 35,
  HOME = 36,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
  INSERT = 45,
  DELETE = 46,
  ZERO = 48,
  ONE = 49,
  TWO = 50,
  THREE = 51,
  FOUR = 52,
  FIVE = 53,
  SIX = 54,
  SEVEN = 55,
  EIGHT = 56,
  NINE = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 81,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  WIN_LEFT = 91,
  WIN_RIGHT = 92,
  SELECT = 93,
  NUM_ZERO = 96,
  NUM_ONE = 97,
  NUM_TWO = 98,
  NUM_THREE = 99,
  NUM_FOUR = 100,
  NUM_FIVE = 101,
  NUM_SIX = 102,
  NUM_SEVEN = 103,
  NUM_EIGHT = 104,
  NUM_NINE = 105,
  MULTIPLY = 106,
  ADD = 107,
  SUBTRACT = 109,
  DECIMAL = 110,
  DIVIDE = 111,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  NUM_LOCK = 144,
  SCROLL_LOCK = 145,
  SEMICOLON = 186,
  EQUALS = 187,
  COMMA = 188,
  DASH = 189,
  PERIOD = 190,
  FORWARD_SLASH = 191,
  GRAVE_ACCENT = 192,
  OPEN_BRACKET = 219,
  BACK_SLASH = 220,
  CLOSE_BRACKET = 221,
  SINGLE_QUOTE = 222,
}

export enum MouseButton {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2,
}

class CInputManager {
  private _pressed = new Set<Key>()
  private _lastPressed = new Set<Key>()

  private _mouseButtonsDown = new Set<MouseButton>()
  private _lastMousebuttonsDown = new Set<MouseButton>()

  private _mousePosition = { x: 0, y: 0 }

  public get mousePosition() {
    return this._mousePosition
  }

  public isDown(keyCode: Key) {
    return this._pressed.has(keyCode)
  }

  public isMouseButtonDown(mouseButton: MouseButton) {
    return this._mouseButtonsDown.has(mouseButton)
  }

  public pressed(keyCode: Key) {
    return this._pressed.has(keyCode) && !this._lastPressed.has(keyCode)
  }

  public mouseButtonPressed(mouseButton: MouseButton) {
    return (
      this._mouseButtonsDown.has(mouseButton) &&
      !this._lastMousebuttonsDown.has(mouseButton)
    )
  }

  public isUp(keyCode: Key) {
    return !this._pressed.has(keyCode)
  }

  public isMouseButtonUp(mouseButton: MouseButton) {
    return !this._mouseButtonsDown.has(mouseButton)
  }

  public released(keyCode: Key) {
    return !this._pressed.has(keyCode) && this._lastPressed.has(keyCode)
  }

  public mouseButtonReleased(mouseButton: MouseButton) {
    return (
      !this._mouseButtonsDown.has(mouseButton) &&
      this._lastMousebuttonsDown.has(mouseButton)
    )
  }

  public onKeydown(event: KeyboardEvent) {
    this._pressed.add(event.keyCode)
    event.preventDefault()
  }

  public onKeyup(event: KeyboardEvent) {
    this._pressed.delete(event.keyCode)
    event.preventDefault()
  }

  public onMousedown(event: MouseEvent) {
    this._mouseButtonsDown.add(event.button)
    event.preventDefault()
  }

  public onMouseup(event: MouseEvent) {
    this._mouseButtonsDown.delete(event.button)
    event.preventDefault()
  }

  public onMouseMove(event: MouseEvent) {
    this._mousePosition.x = event.clientX - document.documentElement.clientLeft
    this._mousePosition.y = event.clientY - document.documentElement.clientTop
  }

  public flush() {
    this._lastPressed.clear()
    this._lastMousebuttonsDown.clear()
    this._pressed.forEach(k => this._lastPressed.add(k))
    this._mouseButtonsDown.forEach(k => this._lastMousebuttonsDown.add(k))
  }
}

export const INPUT_MANAGER = new CInputManager()
