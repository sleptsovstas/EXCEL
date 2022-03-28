import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.enitter = options.enitter
    this.unsubscribers = []

    this.prepare()
  }

  prepare() {}

  toHTML() {
    return ''
  }

  $enit(event, ...args) {
    this.enitter.enit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.enitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
