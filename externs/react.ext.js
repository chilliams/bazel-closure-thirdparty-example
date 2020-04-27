/**
 * @fileoverview Closure Compiler externs for Facebook Thirdparty.React.js 16.9.0
 * @see http://reactjs.org
 * @externs
 * @suppress {checkTypes}
 */

function Thirdparty() {}

Thirdparty.React = function() {}

/**
 * @type {string}
 * @const
 */
Thirdparty.React.version;

Thirdparty.React.createClass = function(specification) {};
Thirdparty.React.createFactory = function(reactClass) {};

/**
 * @param {*} componentClass
 * @return {boolean}
 * @deprecated
 */
Thirdparty.React.isValidClass = function(componentClass) {};

/**
 * @param {?Object} object
 * @return {boolean} True if `object` is a valid component.
 */
Thirdparty.React.isValidElement = function(object) {};

/**
 * @param {Thirdparty.React.Component} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {Thirdparty.React.Component}
 * @deprecated
 */
Thirdparty.React.renderComponent = function(container, mountPoint, callback) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into the supplied `container`.
 *
 * @param {Function} constructor React component constructor.
 * @param {Object} props Initial props of the component instance.
 * @param {Element} container DOM element to render into.
 * @return {Thirdparty.React.Component} Component instance rendered in `container`.
 */
Thirdparty.React.constructAndRenderComponent = function(constructor, props, container) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into a container node identified by supplied `id`.
 *
 * @param {Function} componentConstructor React component constructor
 * @param {Object} props Initial props of the component instance.
 * @param {string} id ID of the DOM element to render into.
 * @return {Thirdparty.React.Component} Component instance rendered in the container node.
 */
Thirdparty.React.constructAndRenderComponentByID = function(
  componentConstructor,
  props,
  id
) {};

Thirdparty.React.cloneElement = function(element, props) {};

/**
 * @interface
 */
Thirdparty.React.ReactElement = function() {};

/**
 * @constructor
 */
Thirdparty.React.Component = function() {};

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.props;

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.state;

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.refs;

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.context;

/**
 * @type {Object}
 * @protected
 */
Thirdparty.React.Component.prototype.propTypes;

/**
 * @type {Object}
 * @protected
 */
Thirdparty.React.Component.prototype.contextTypes;

/**
 * @type {Object}
 * @protected
 */
Thirdparty.React.Component.prototype.contextType;

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.mixins;

/**
 * @type {Object}
 */
Thirdparty.React.Component.prototype.childContextTypes;

/**
 * @return {Object}
 */
Thirdparty.React.Component.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
Thirdparty.React.Component.prototype.getDefaultProps = function() {};

/**
 * @return {Object}
 */
Thirdparty.React.Component.prototype.getChildContext = function() {};

/**
 * @param {Thirdparty.React.Component} targetComponent
 * @return {Thirdparty.React.Component}
 */
Thirdparty.React.Component.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @param {Function=} callback
 */
Thirdparty.React.Component.prototype.forceUpdate = function(callback) {};

/**
 * @return {boolean}
 */
Thirdparty.React.Component.prototype.isMounted = function() {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
Thirdparty.React.Component.prototype.setState = function(nextState, callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
Thirdparty.React.Component.prototype.replaceState = function(nextState, callback) {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.componentWillMount = function() {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.UNSAFE_componentWillMount = function() {};

/**
 * @param {Element} element
 * @protected
 */
Thirdparty.React.Component.prototype.componentDidMount = function(element) {};

/**
 * @param {Object} nextProps
 * @protected
 */
Thirdparty.React.Component.prototype.componentWillReceiveProps = function(nextProps) {};

/**
 * @param {Object} nextProps
 * @protected
 */
Thirdparty.React.Component.prototype.UNSAFE_componentWillReceiveProps = function(
  nextProps
) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
Thirdparty.React.Component.prototype.shouldComponentUpdate = function(
  nextProps,
  nextState
) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
Thirdparty.React.Component.prototype.componentWillUpdate = function(
  nextProps,
  nextState
) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
Thirdparty.React.Component.prototype.UNSAFE_componentWillUpdate = function(
  nextProps,
  nextState
) {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @param {Element} rootNode
 * @protected
 */
Thirdparty.React.Component.prototype.componentDidUpdate = function(
  prevProps,
  prevState,
  rootNode
) {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.componentWillUnmount = function() {};

/**
 * @protected
 * @param {Object} error
 * @param {Object} info
 */
Thirdparty.React.Component.prototype.componentDidCatch = function(error, info) {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.getDerivedStateFromProps = function() {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.getDerivedStateFromError = function() {};

/**
 * @protected
 */
Thirdparty.React.Component.prototype.getSnapshotBeforeUpdate = function() {};

/**
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.Component.prototype.render = function() {};

/**
 * @extends {Thirdparty.React.Component}
 * @constructor
 */
Thirdparty.React.PureComponent = function() {};

/**
 * @type {boolean}
 */
Thirdparty.React.PureComponent.prototype.isPureReactComponent;

/**
 * Interface to preserve React attributes for advanced compilation.
 * @interface
 */
Thirdparty.React.ReactAttribute = function() {};

/**
 * @type {Object}
 */
Thirdparty.React.ReactAttribute.dangerouslySetInnerHTML;

/**
 * @type {string}
 */
Thirdparty.React.ReactAttribute.__html;

/**
 * @type {string}
 */
Thirdparty.React.ReactAttribute.key;

/**
 * @type {string}
 */
Thirdparty.React.ReactAttribute.ref;

// Attributes not defined in default Closure Compiler DOM externs.
// http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
// It happens because React favors camelCasing over allinlowercase.
// How to update list:
//   1) Open http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
//   2) Github Search in google/closure-compiler for attribute.

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.allowFullScreen;

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.autoComplete;

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.autoFocus;

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.autoPlay;

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.noValidate;

/**
 * @type {boolean}
 */
Thirdparty.React.ReactAttribute.spellCheck;

// http://facebook.github.io/react/docs/events.html

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onCopy;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onCut;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onPaste;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onCompositionEnd;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onCompositionStart;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onCompositionUpdate;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onKeyDown;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onKeyPress;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onKeyUp;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onFocus;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onBlur;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onChange;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onInput;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onInvalid;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onSubmit;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onClick;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onAuxClick;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onContextMenu;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDoubleClick;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDrag;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragEnd;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragEnter;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragExit;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragLeave;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragOver;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDragStart;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onDrop;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseDown;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseEnter;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseLeave;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseMove;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseOut;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseOver;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onMouseUp;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onSelect;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onTouchCancel;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onTouchEnd;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onTouchMove;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onTouchStart;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onScroll;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onWheel;

/**
 * @type {Function}
 */
Thirdparty.React.ReactAttribute.onAbort;
Thirdparty.React.ReactAttribute.onCanPlay;
Thirdparty.React.ReactAttribute.onCanPlayThrough;
Thirdparty.React.ReactAttribute.onDurationChange;
Thirdparty.React.ReactAttribute.onEmptied;
Thirdparty.React.ReactAttribute.onEncrypted;
Thirdparty.React.ReactAttribute.onEnded;
Thirdparty.React.ReactAttribute.onError;
Thirdparty.React.ReactAttribute.onLoadedData;
Thirdparty.React.ReactAttribute.onLoadedMetadata;
Thirdparty.React.ReactAttribute.onLoadStart;
Thirdparty.React.ReactAttribute.onPause;
Thirdparty.React.ReactAttribute.onPlay;
Thirdparty.React.ReactAttribute.onPlaying;
Thirdparty.React.ReactAttribute.onProgress;
Thirdparty.React.ReactAttribute.onRateChange;
Thirdparty.React.ReactAttribute.onSeeked;
Thirdparty.React.ReactAttribute.onSeeking;
Thirdparty.React.ReactAttribute.onStalled;
Thirdparty.React.ReactAttribute.onSuspend;
Thirdparty.React.ReactAttribute.onTimeUpdate;
Thirdparty.React.ReactAttribute.onVolumeChange;
Thirdparty.React.ReactAttribute.onWaiting;

Thirdparty.React.ReactAttribute.onAnimationStart;
Thirdparty.React.ReactAttribute.onAnimationEnd;
Thirdparty.React.ReactAttribute.onAnimationIteration;

Thirdparty.React.ReactAttribute.onTransitionEnd;

Thirdparty.React.ReactAttribute.onToggle;

/**
 * @interface
 */
Thirdparty.React.SyntheticEvent = function() {};

/**
 * @return {boolean}
 */
Thirdparty.React.SyntheticEvent.prototype.persist = function() {};

/**
 * @type {Object}
 */
Thirdparty.React.SyntheticEvent.prototype.nativeEvent;

/**
 * @type {Function}
 */
Thirdparty.React.SyntheticEvent.prototype.preventDefault;

/**
 * @type {Function}
 */
Thirdparty.React.SyntheticEvent.prototype.stopPropagation;

/**
 * @type {Object}
 * @const
 */
Thirdparty.React.DOM = {};

/**
 * @typedef {
 *   boolean|number|string|Thirdparty.React.Component|
 *   Array.<boolean>|Array.<number>|Array.<string>|Array.<Thirdparty.React.Component>
 * }
 */
Thirdparty.React.ChildrenArgument;

/**
 * @param {*} componentClass
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 */
Thirdparty.React.createElement = function(componentClass, props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.area = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.article = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.aside = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.base = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.bdi = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.bdo = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.big = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.blockquote = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.canvas = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.caption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.cite = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.clipPath = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.data = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.datalist = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.defs = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.del = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.details = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.dfn = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.dialog = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.ellipse = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.figcaption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.figure = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.head = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.html = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.image = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.input = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.ins = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.kbd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.keygen = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.linearGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.link = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.main = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.map = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.mark = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.mask = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.menu = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.menuitem = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.meta = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.meter = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.noscript = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.output = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.pattern = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.picture = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.polygon = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.progress = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.q = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.radialGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.rp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.rt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.ruby = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.s = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.samp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.script = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.stop = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.style = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.summary = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.sup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.text = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.track = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.tspan = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.var = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...Thirdparty.React.ChildrenArgument} children
 * @return {Thirdparty.React.Component}
 * @protected
 */
Thirdparty.React.DOM.wbr = function(props, children) {};

/**
 * @typedef {function(boolean, boolean, Object, string, string, string): boolean} Thirdparty.React.ChainableTypeChecker
 */
Thirdparty.React.ChainableTypeChecker;

/**
 * @type {Thirdparty.React.ChainableTypeChecker}
 */
Thirdparty.React.ChainableTypeChecker.weak;

/**
 * @type {Thirdparty.React.ChainableTypeChecker}
 */
Thirdparty.React.ChainableTypeChecker.weak.isRequired;

/**
 * @type {Thirdparty.React.ChainableTypeChecker}
 */
Thirdparty.React.ChainableTypeChecker.isRequired;

/**
 * @type {Thirdparty.React.ChainableTypeChecker}
 */
Thirdparty.React.ChainableTypeChecker.isRequired.weak;

/**
 * @type {Object}
 */
Thirdparty.React.PropTypes = {
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  any: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  array: function() {},
  /**
   * @param {Thirdparty.React.ChainableTypeChecker} typeChecker
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  arrayOf: function(typeChecker) {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  bool: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  component: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  element: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  func: function() {},
  /**
   * @param {function (new:Object, ...*): ?} expectedClass
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  instanceOf: function(expectedClass) {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  node: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  number: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  object: function() {},
  /**
   * @param {Thirdparty.React.ChainableTypeChecker} typeChecker
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  objectOf: function(typeChecker) {},
  /**
   * @param {Array.<*>} expectedValues
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  oneOf: function(expectedValues) {},
  /**
   * @param {Array.<Thirdparty.React.ChainableTypeChecker>} typeCheckers
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  oneOfType: function(typeCheckers) {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  renderable: function() {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  /**
   * @param {Object.<Thirdparty.React.ChainableTypeChecker>} shapeTypes
   * @return {Thirdparty.React.ChainableTypeChecker}
   */
  shape: function(shapeTypes) {},
  /** @type {Thirdparty.React.ChainableTypeChecker} */
  string: function() {}
};

/**
 * @type {Object}
 */
Thirdparty.React.Children;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 * @return {Object|undefined} Object containing the ordered map of results.
 */
Thirdparty.React.Children.map;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 */
Thirdparty.React.Children.forEach;

/**
 * @param {Object} children Children tree container.
 * @return {Object|undefined}
 */
Thirdparty.React.Children.only;

/**
 * @param {Object} children Children tree container.
 * @return {Array.<Object>} Flat array of children.
 */
Thirdparty.React.Children.toArray;

/**
 * React event system creates plugins and event properties dynamically.
 * These externs are needed when consuming React as a JavaScript module
 * in light of new ClojureScript compiler additions (as of version 1.9.456).
 * See the following link for an example.
 * https://github.com/facebook/react/blob/c7129c/src/renderers/dom/shared/eventPlugins/SimpleEventPlugin.js#L43
 */
var ResponderEventPlugin;
var SimpleEventPlugin;
var TapEventPlugin;
var EnterLeaveEventPlugin;
var ChangeEventPlugin;
var SelectEventPlugin;
var BeforeInputEventPlugin;

var bubbled;
var captured;
var topAbort;
var topAnimationEnd;
var topAnimationIteration;
var topAnimationStart;
var topBlur;
var topCancel;
var topCanPlay;
var topCanPlayThrough;
var topClick;
var topClose;
var topContextMenu;
var topCopy;
var topCut;
var topDoubleClick;
var topDrag;
var topDragEnd;
var topDragEnter;
var topDragExit;
var topDragLeave;
var topDragOver;
var topDragStart;
var topDrop;
var topDurationChange;
var topEmptied;
var topEncrypted;
var topEnded;
var topError;
var topFocus;
var topInput;
var topInvalid;
var topKeyDown;
var topKeyPress;
var topKeyUp;
var topLoad;
var topLoadedData;
var topLoadedMetadata;
var topLoadStart;
var topMouseDown;
var topMouseMove;
var topMouseOut;
var topMouseOver;
var topMouseUp;
var topPaste;
var topPause;
var topPlay;
var topPlaying;
var topProgress;
var topRateChange;
var topReset;
var topScroll;
var topSeeked;
var topSeeking;
var topStalled;
var topSubmit;
var topSuspend;
var topTimeUpdate;
var topTouchCancel;
var topTouchEnd;
var topTouchMove;
var topTouchStart;
var topTransitionEnd;
var topVolumeChange;
var topWaiting;
var topWheel;

Thirdparty.React.Fragment = function() {};

/* 16.3.0 new API */

Thirdparty.React.createContext = function() {};

Thirdparty.React.Context = function() {};
Thirdparty.React.Context.prototype.Provider = function() {};
Thirdparty.React.Context.prototype.Consumer = function() {};

Thirdparty.React.createRef = function() {};
Thirdparty.React.forwardRef = function() {};

Thirdparty.React.StrictMode = function() {};

// https://github.com/facebook/react/blob/master/packages/shared/isTextInputElement.js#L13-L29
// Closure will rename these properties during optimization
// But these are used dynamically to check against element props so they must not be renamed.
var isTextInputElement = {};
isTextInputElement.supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

// 16.6 new api

Thirdparty.React.Suspense = function() {};
Thirdparty.React.Suspense.prototype.maxDuration;
Thirdparty.React.memo = function() {};
Thirdparty.React.lazy = function() {};
Thirdparty.React.unstable_ConcurrentMode = function() {};
Thirdparty.React.unstable_Profiler = function() {};

// 16.8 Hooks

Thirdparty.React.useState = function() {};
Thirdparty.React.useEffect = function() {};
Thirdparty.React.useContext = function() {};
Thirdparty.React.useReducer = function() {};
Thirdparty.React.useCallback = function() {};
Thirdparty.React.useMemo = function() {};
Thirdparty.React.useRef = function() {};
Thirdparty.React.useImperativeHandle = function() {};
Thirdparty.React.useLayoutEffect = function() {};
Thirdparty.React.useDebugValue = function() {};

// 16.8, for some reason renaming unstable Scheduler function calls don't work
// with Closure node module processing.
// unstable_now caused problems with Reagent tests.
// These aren't neede for foreign-libs use, just :npm-deps!

var Scheduler = {
  unstable_ImmediatePriority: function() {},
  unstable_UserBlockingPriority: function() {},
  unstable_NormalPriority: function() {},
  unstable_IdlePriority: function() {},
  unstable_LowPriority: function() {},
  unstable_runWithPriority: function() {},
  unstable_next: function() {},
  unstable_scheduleCallback: function() {},
  unstable_cancelCallback: function() {},
  unstable_wrapCallback: function() {},
  unstable_getCurrentPriorityLevel: function() {},
  unstable_shouldYield: function() {},
  unstable_continueExecution: function() {},
  unstable_pauseExecution: function() {},
  unstable_getFirstCallbackNode: function() {},
  unstable_now: function() {}
};

// 16.9

Thirdparty.React.Profiler = function() {};

// Support hooks with node module processing.
// They are used with hasOwnProperty in https://github.com/facebook/react/blob/v16.12.0/packages/shared/ReactSharedInternals.js
var ReactSharedInternals = {};
ReactSharedInternals.ReactCurrentDispatcher = {};
ReactSharedInternals.ReactCurrentBatchConfig = {};

var ReactErrorInfo = {};
ReactErrorInfo.componentStack = {};
