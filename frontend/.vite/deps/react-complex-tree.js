import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/react-complex-tree/lib/esm/treeItem/TreeItemElement.js
var import_react31 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/treeItem/TreeItemChildren.js
var import_react28 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/tree/Tree.js
var React11 = __toESM(require_react());
var import_react27 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/ControlledTreeEnvironment.js
var React5 = __toESM(require_react());
var import_react16 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/InteractionManagerProvider.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/types.js
var InteractionMode;
(function(InteractionMode2) {
  InteractionMode2["DoubleClickItemToExpand"] = "double-click-item-to-expand";
  InteractionMode2["ClickItemToExpand"] = "click-item-to-expand";
  InteractionMode2["ClickArrowToExpand"] = "click-arrow-to-expand";
})(InteractionMode || (InteractionMode = {}));

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/mergeInteractionManagers.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var mergeInteractionManagers = function(main, fallback) {
  return {
    mode: main.mode,
    createInteractiveElementProps: function(item, treeId, actions, renderFlags) {
      return __assign(__assign({}, fallback.createInteractiveElementProps(item, treeId, actions, renderFlags)), main.createInteractiveElementProps(item, treeId, actions, renderFlags));
    }
  };
};

// node_modules/react-complex-tree/lib/esm/isControlKey.js
var isControlKey = function(e) {
  return e.ctrlKey || navigator.platform.toUpperCase().indexOf("MAC") >= 0 && e.metaKey;
};

// node_modules/react-complex-tree/lib/esm/interactionMode/DoubleClickItemToExpandInteractionManager.js
var DoubleClickItemToExpandInteractionManager = (
  /** @class */
  function() {
    function DoubleClickItemToExpandInteractionManager2(environment) {
      this.mode = InteractionMode.DoubleClickItemToExpand;
      this.environment = environment;
    }
    DoubleClickItemToExpandInteractionManager2.prototype.createInteractiveElementProps = function(item, treeId, actions, renderFlags) {
      var _this = this;
      return {
        onClick: function(e) {
          actions.focusItem();
          if (e.shiftKey) {
            actions.selectUpTo(!isControlKey(e));
          } else if (isControlKey(e)) {
            if (renderFlags.isSelected) {
              actions.unselectItem();
            } else {
              actions.addToSelectedItems();
            }
          } else {
            actions.selectItem();
          }
        },
        onDoubleClick: function() {
          actions.focusItem();
          actions.selectItem();
          if (item.isFolder) {
            actions.toggleExpandedState();
          }
          if (!item.isFolder || _this.environment.canInvokePrimaryActionOnItemContainer) {
            actions.primaryAction();
          }
        },
        onFocus: function() {
          actions.focusItem();
        },
        onDragStart: function(e) {
          e.dataTransfer.dropEffect = "move";
          actions.startDragging();
        },
        onDragOver: function(e) {
          e.preventDefault();
        },
        draggable: renderFlags.canDrag && !renderFlags.isRenaming,
        tabIndex: !renderFlags.isRenaming ? renderFlags.isFocused ? 0 : -1 : void 0
      };
    };
    return DoubleClickItemToExpandInteractionManager2;
  }()
);

// node_modules/react-complex-tree/lib/esm/interactionMode/ClickItemToExpandInteractionManager.js
var ClickItemToExpandInteractionManager = (
  /** @class */
  function() {
    function ClickItemToExpandInteractionManager2(environment) {
      this.mode = InteractionMode.ClickItemToExpand;
      this.environment = environment;
    }
    ClickItemToExpandInteractionManager2.prototype.createInteractiveElementProps = function(item, treeId, actions, renderFlags) {
      var _this = this;
      return {
        onClick: function(e) {
          actions.focusItem();
          if (e.shiftKey) {
            actions.selectUpTo(!isControlKey(e));
          } else if (isControlKey(e)) {
            if (renderFlags.isSelected) {
              actions.unselectItem();
            } else {
              actions.addToSelectedItems();
            }
          } else {
            if (item.isFolder) {
              actions.toggleExpandedState();
            }
            actions.selectItem();
            if (!item.isFolder || _this.environment.canInvokePrimaryActionOnItemContainer) {
              actions.primaryAction();
            }
          }
        },
        onFocus: function() {
          actions.focusItem();
        },
        onDragStart: function(e) {
          e.dataTransfer.dropEffect = "move";
          actions.startDragging();
        },
        onDragOver: function(e) {
          e.preventDefault();
        },
        draggable: renderFlags.canDrag && !renderFlags.isRenaming,
        tabIndex: !renderFlags.isRenaming ? renderFlags.isFocused ? 0 : -1 : void 0
      };
    };
    return ClickItemToExpandInteractionManager2;
  }()
);

// node_modules/react-complex-tree/lib/esm/interactionMode/ClickArrowToExpandInteractionManager.js
var ClickArrowToExpandInteractionManager = (
  /** @class */
  function() {
    function ClickArrowToExpandInteractionManager2(environment) {
      this.mode = InteractionMode.ClickItemToExpand;
      this.environment = environment;
    }
    ClickArrowToExpandInteractionManager2.prototype.createInteractiveElementProps = function(item, treeId, actions, renderFlags) {
      var _this = this;
      return {
        onClick: function(e) {
          actions.focusItem();
          if (e.shiftKey) {
            actions.selectUpTo(!isControlKey(e));
          } else if (isControlKey(e)) {
            if (renderFlags.isSelected) {
              actions.unselectItem();
            } else {
              actions.addToSelectedItems();
            }
          } else {
            actions.selectItem();
            if (!item.isFolder || _this.environment.canInvokePrimaryActionOnItemContainer) {
              actions.primaryAction();
            }
          }
        },
        onFocus: function() {
          actions.focusItem();
        },
        onDragStart: function(e) {
          e.dataTransfer.dropEffect = "move";
          actions.startDragging();
        },
        onDragOver: function(e) {
          e.preventDefault();
        },
        draggable: renderFlags.canDrag && !renderFlags.isRenaming,
        tabIndex: !renderFlags.isRenaming ? renderFlags.isFocused ? 0 : -1 : void 0
      };
    };
    return ClickArrowToExpandInteractionManager2;
  }()
);

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/buildInteractionMode.js
var buildInteractionMode = function(mode, environment) {
  switch (mode) {
    case InteractionMode.DoubleClickItemToExpand:
      return new DoubleClickItemToExpandInteractionManager(environment);
    case InteractionMode.ClickItemToExpand:
      return new ClickItemToExpandInteractionManager(environment);
    case InteractionMode.ClickArrowToExpand:
      return new ClickArrowToExpandInteractionManager(environment);
    default:
      throw Error("Unknown interaction mode ".concat(mode));
  }
};

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/InteractionManagerProvider.js
var InteractionManagerContext = React.createContext(null);
var useInteractionManager = function() {
  return React.useContext(InteractionManagerContext);
};
var InteractionManagerProvider = function(_a) {
  var children = _a.children;
  var environment = useTreeEnvironment();
  var defaultInteractionMode = environment.defaultInteractionMode;
  var interactionManager = (0, import_react.useMemo)(function() {
    var _a2;
    if (defaultInteractionMode && typeof defaultInteractionMode !== "string") {
      if (defaultInteractionMode.extends) {
        return mergeInteractionManagers(defaultInteractionMode, buildInteractionMode(defaultInteractionMode.extends, environment));
      }
      return defaultInteractionMode;
    }
    return buildInteractionMode((_a2 = defaultInteractionMode) !== null && _a2 !== void 0 ? _a2 : InteractionMode.ClickItemToExpand, environment);
  }, []);
  return React.createElement(InteractionManagerContext.Provider, { value: interactionManager }, children);
};

// node_modules/react-complex-tree/lib/esm/drag/DragAndDropProvider.js
var React2 = __toESM(require_react());
var import_react10 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/drag/useCanDropAt.js
var import_react2 = __toESM(require_react());
var useCanDropAt = function() {
  var environment = useTreeEnvironment();
  return (0, import_react2.useCallback)(function(draggingPosition, draggingItems) {
    if (draggingPosition.targetType === "between-items") {
      if (!environment.canReorderItems) {
        return false;
      }
    } else if (draggingPosition.targetType === "root") {
      if (!environment.canDropOnFolder) {
        return false;
      }
    } else {
      var resolvedItem = environment.items[draggingPosition.targetItem];
      if (!resolvedItem || !environment.canDropOnFolder && resolvedItem.isFolder || !environment.canDropOnNonFolder && !resolvedItem.isFolder || draggingItems.some(function(draggingItem) {
        return draggingItem.index === draggingPosition.targetItem;
      })) {
        return false;
      }
    }
    if (environment.canDropAt && (!draggingItems || !environment.canDropAt(draggingItems, draggingPosition))) {
      return false;
    }
    return true;
  }, [environment]);
};

// node_modules/react-complex-tree/lib/esm/drag/useGetViableDragPositions.js
var import_react4 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/drag/useGetParentOfLinearItem.js
var import_react3 = __toESM(require_react());
var useGetGetParentOfLinearItem = function() {
  var environment = useTreeEnvironment();
  return (0, import_react3.useCallback)(function(itemLinearIndex, treeId) {
    var linearItems = environment.linearItems[treeId];
    var depth = linearItems[itemLinearIndex].depth;
    var parentLinearIndex = itemLinearIndex;
    for (; !!linearItems[parentLinearIndex] && linearItems[parentLinearIndex].depth !== depth - 1; parentLinearIndex -= 1)
      ;
    var parent = linearItems[parentLinearIndex];
    if (!parent) {
      parent = { item: environment.trees[treeId].rootItem, depth: 0 };
      parentLinearIndex = 0;
    }
    return { parent, parentLinearIndex };
  }, [environment.linearItems, environment.trees]);
};

// node_modules/react-complex-tree/lib/esm/drag/useGetViableDragPositions.js
var useGetViableDragPositions = function() {
  var environment = useTreeEnvironment();
  var getParentOfLinearItem = useGetGetParentOfLinearItem();
  var canDropAt = useCanDropAt();
  var isDescendant = (0, import_react4.useCallback)(function(treeId, itemLinearIndex, potentialParents) {
    var _a = getParentOfLinearItem(itemLinearIndex, treeId), parent = _a.parent, parentLinearIndex = _a.parentLinearIndex;
    if (potentialParents.some(function(p) {
      return p.index === parent.item;
    }))
      return true;
    if (parent.depth === 0)
      return false;
    return isDescendant(treeId, parentLinearIndex, potentialParents);
  }, [getParentOfLinearItem]);
  return (0, import_react4.useCallback)(function(treeId, draggingItems) {
    var _a, _b;
    var linearItems = environment.linearItems[treeId];
    var targets = [];
    var skipUntilDepthIsLowerThan = -1;
    for (
      var linearIndex = 0;
      linearIndex < linearItems.length;
      // eslint-disable-next-line no-plusplus
      linearIndex++
    ) {
      var _c = linearItems[linearIndex], item = _c.item, depth = _c.depth;
      if (skipUntilDepthIsLowerThan !== -1 && depth > skipUntilDepthIsLowerThan) {
        continue;
      } else {
        skipUntilDepthIsLowerThan = -1;
      }
      var parent_1 = getParentOfLinearItem(linearIndex, treeId).parent;
      var childIndex = environment.items[parent_1.item].children.indexOf(item);
      if (isDescendant(treeId, linearIndex, draggingItems)) {
        skipUntilDepthIsLowerThan = depth + 1;
        continue;
      }
      var itemPosition = {
        targetType: "item",
        parentItem: parent_1.item,
        targetItem: item,
        linearIndex,
        depth,
        treeId
      };
      var topPosition = {
        targetType: "between-items",
        parentItem: parent_1.item,
        linePosition: "top",
        childIndex,
        depth,
        treeId,
        linearIndex
      };
      var bottomPosition = {
        targetType: "between-items",
        parentItem: parent_1.item,
        linePosition: "bottom",
        linearIndex: linearIndex + 1,
        childIndex: childIndex + 1,
        depth,
        treeId
      };
      var skipTopPosition = depth === ((_b = (_a = linearItems[linearIndex - 1]) === null || _a === void 0 ? void 0 : _a.depth) !== null && _b !== void 0 ? _b : -1);
      if (!skipTopPosition && canDropAt(topPosition, draggingItems)) {
        targets.push(topPosition);
      }
      if (canDropAt(itemPosition, draggingItems)) {
        targets.push(itemPosition);
      }
      if (canDropAt(bottomPosition, draggingItems)) {
        targets.push(bottomPosition);
      }
    }
    return targets;
  }, [
    canDropAt,
    environment.items,
    environment.linearItems,
    getParentOfLinearItem,
    isDescendant
  ]);
};

// node_modules/react-complex-tree/lib/esm/useSideEffect.js
var import_react5 = __toESM(require_react());
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var useSideEffect = function(effect, deps, changeOn) {
  var previousRef = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(function() {
    if (!previousRef.current) {
      previousRef.current = __spreadArray([], changeOn, true);
      effect();
    } else {
      var changed = previousRef.current.some(function(v, i) {
        return v !== changeOn[i];
      });
      if (changed) {
        previousRef.current = __spreadArray([], changeOn, true);
        effect();
      }
    }
  }, __spreadArray(__spreadArray([], deps, true), changeOn, true));
};

// node_modules/react-complex-tree/lib/esm/utils.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var buildMapForTrees = function(treeIds, build) {
  return treeIds.map(function(id) {
    return [id, build(id)];
  }).reduce(function(a, _a) {
    var _b;
    var id = _a[0], obj = _a[1];
    return __assign2(__assign2({}, a), (_b = {}, _b[id] = obj, _b));
  }, {});
};
var getDocument = function() {
  return typeof document !== "undefined" ? document : void 0;
};

// node_modules/react-complex-tree/lib/esm/useCallSoon.js
var import_react6 = __toESM(require_react());
function useCallSoon(dontClean) {
  if (dontClean === void 0) {
    dontClean = false;
  }
  var handleRef = (0, import_react6.useRef)(new Array());
  (0, import_react6.useEffect)(function() {
    if (dontClean) {
      return function() {
      };
    }
    var handles = handleRef.current;
    return function() {
      return handles.forEach(function(handle) {
        return cancelAnimationFrame(handle);
      });
    };
  }, [dontClean, handleRef]);
  return (0, import_react6.useCallback)(function(callback) {
    var handle = requestAnimationFrame(function() {
      handleRef.current.splice(handleRef.current.indexOf(handle), 1);
      callback();
    });
    handleRef.current.push(handle);
  }, [handleRef]);
}

// node_modules/react-complex-tree/lib/esm/useStableHandler.js
var import_react8 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/useRefCopy.js
var import_react7 = __toESM(require_react());
var useRefCopy = function(value) {
  var ref = (0, import_react7.useRef)(value);
  ref.current = value;
  return ref;
};

// node_modules/react-complex-tree/lib/esm/useStableHandler.js
var useStableHandler = function(handler) {
  var handlerRef = useRefCopy(handler);
  return (0, import_react8.useCallback)(function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return handlerRef.current.apply(handlerRef, args);
  }, [
    handlerRef
  ]);
};

// node_modules/react-complex-tree/lib/esm/useGetOriginalItemOrder.js
var useGetOriginalItemOrder = function() {
  var env = useTreeEnvironment();
  return useStableHandler(function(treeId, items) {
    return items.map(function(item) {
      return [
        item,
        env.linearItems[treeId].findIndex(function(linearItem) {
          return linearItem.item === item.index;
        })
      ];
    }).sort(function(_a, _b) {
      var _ = _a[0], aPos = _a[1];
      var _2 = _b[0], bPos = _b[1];
      return aPos - bPos;
    }).map(function(_a) {
      var item = _a[0];
      return item;
    });
  });
};

// node_modules/react-complex-tree/lib/esm/drag/useDraggingPosition.js
var import_react9 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/layoutUtils.js
var computeItemHeight = function(treeId) {
  var _a;
  var firstItem = (_a = getDocument()) === null || _a === void 0 ? void 0 : _a.querySelector('[data-rct-tree="'.concat(treeId, '"] [data-rct-item-container="true"]'));
  if (firstItem) {
    var style = getComputedStyle(firstItem);
    return firstItem.offsetHeight + Math.max(parseFloat(style.marginTop), parseFloat(style.marginBottom));
  }
  return 5;
};
var isOutsideOfContainer = function(e, treeBb) {
  return e.clientX <= treeBb.left || e.clientX >= treeBb.right || e.clientY <= treeBb.top || e.clientY >= treeBb.bottom;
};

// node_modules/react-complex-tree/lib/esm/drag/DraggingPositionEvaluation.js
var DraggingPositionEvaluation = (
  /** @class */
  function() {
    function DraggingPositionEvaluation2(env, e, treeId, hoveringPosition, draggingItems, getParentOfLinearItem) {
      this.env = env;
      this.e = e;
      this.treeId = treeId;
      this.linearIndex = hoveringPosition.linearIndex;
      this.offset = hoveringPosition.offset;
      this.indentation = hoveringPosition.indentation;
      this.targetItem = this.env.linearItems[this.treeId][this.linearIndex];
      this.getParentOfLinearItem = getParentOfLinearItem;
      this.draggingItems = draggingItems;
    }
    DraggingPositionEvaluation2.prototype.getEmptyTreeDragPosition = function() {
      return {
        targetType: "root",
        treeId: this.treeId,
        depth: 0,
        linearIndex: 0,
        targetItem: this.env.trees[this.treeId].rootItem
      };
    };
    DraggingPositionEvaluation2.prototype.maybeRedirectToParent = function() {
      var redirectTargetToParent = !this.env.canReorderItems && !this.env.canDropOnNonFolder && !this.env.items[this.targetItem.item].isFolder;
      if (redirectTargetToParent) {
        var _a = this.getParentOfLinearItem(this.linearIndex, this.treeId), parentLinearIndex = _a.parentLinearIndex, parent_1 = _a.parent;
        this.targetItem = parent_1;
        this.linearIndex = parentLinearIndex;
      }
    };
    DraggingPositionEvaluation2.prototype.maybeReparentUpwards = function() {
      var _a, _b;
      if (this.indentation === void 0) {
        return void 0;
      }
      var treeLinearItems = this.env.linearItems[this.treeId];
      var deepestDepth = treeLinearItems[this.linearIndex].depth;
      var legalDropDepthCount = (
        // itemDepthDifferenceToNextItem/isLastInGroup
        deepestDepth - ((_b = (_a = treeLinearItems[this.linearIndex + 1]) === null || _a === void 0 ? void 0 : _a.depth) !== null && _b !== void 0 ? _b : 0)
      );
      var canReparentUpwards = this.offset === "bottom" && legalDropDepthCount > 0;
      if (!canReparentUpwards) {
        return void 0;
      }
      var droppingIndent = Math.max(deepestDepth - legalDropDepthCount, this.indentation);
      var newParent = {
        parentLinearIndex: this.linearIndex,
        parent: this.targetItem
      };
      var insertionItemAbove;
      for (var i = deepestDepth; i >= droppingIndent; i -= 1) {
        insertionItemAbove = newParent;
        newParent = this.getParentOfLinearItem(newParent.parentLinearIndex, this.treeId);
      }
      if (this.indentation === treeLinearItems[this.linearIndex].depth) {
        return void 0;
      }
      if (!insertionItemAbove) {
        return void 0;
      }
      var reparentedChildIndex = this.env.items[newParent.parent.item].children.indexOf(insertionItemAbove.parent.item) + 1;
      if (this.draggingItems && this.isDescendant(this.treeId, newParent.parentLinearIndex + 1, this.draggingItems)) {
        return void 0;
      }
      return {
        targetType: "between-items",
        treeId: this.treeId,
        parentItem: newParent.parent.item,
        depth: droppingIndent,
        linearIndex: this.linearIndex + 1,
        childIndex: reparentedChildIndex,
        linePosition: "bottom"
      };
    };
    DraggingPositionEvaluation2.prototype.maybeRedirectInsideOpenFolder = function() {
      var nextItem = this.env.linearItems[this.treeId][this.linearIndex + 1];
      var redirectInsideOpenFolder = !this.env.canDropBelowOpenFolders && nextItem && this.targetItem.depth === nextItem.depth - 1 && this.offset === "bottom";
      if (redirectInsideOpenFolder) {
        this.targetItem = nextItem;
        this.linearIndex += 1;
        this.offset = "top";
      }
    };
    DraggingPositionEvaluation2.prototype.maybeMapToBottomOffset = function() {
      var priorItem = this.env.linearItems[this.treeId][this.linearIndex - 1];
      if (!priorItem || (priorItem === null || priorItem === void 0 ? void 0 : priorItem.depth) === void 0)
        return;
      var depthDistanceToPrior = priorItem.depth - this.targetItem.depth;
      if (this.offset === "top" && (depthDistanceToPrior === 0 || depthDistanceToPrior > 0 && this.indentation !== void 0)) {
        this.offset = "bottom";
        this.linearIndex -= 1;
        this.targetItem = this.env.linearItems[this.treeId][this.linearIndex];
      }
    };
    DraggingPositionEvaluation2.prototype.canDropAtCurrentTarget = function() {
      var _this = this;
      var _a;
      var targetItemData = this.env.items[this.targetItem.item];
      if (!this.offset && !this.env.canDropOnNonFolder && !targetItemData.isFolder) {
        return false;
      }
      if (!this.offset && !this.env.canDropOnFolder && targetItemData.isFolder) {
        return false;
      }
      if (this.offset && !this.env.canReorderItems) {
        return false;
      }
      if ((_a = this.draggingItems) === null || _a === void 0 ? void 0 : _a.some(function(draggingItem) {
        return draggingItem.index === _this.targetItem.item;
      })) {
        return false;
      }
      return true;
    };
    DraggingPositionEvaluation2.prototype.getDraggingPosition = function() {
      if (this.env.linearItems[this.treeId].length === 0) {
        return this.getEmptyTreeDragPosition();
      }
      if (!this.draggingItems || this.linearIndex < 0 || this.linearIndex >= this.env.linearItems[this.treeId].length) {
        return void 0;
      }
      this.maybeRedirectToParent();
      this.maybeRedirectInsideOpenFolder();
      this.maybeMapToBottomOffset();
      var reparented = this.maybeReparentUpwards();
      if (reparented) {
        return reparented;
      }
      if (this.areDraggingItemsDescendantOfTarget()) {
        return "invalid";
      }
      if (!this.canDropAtCurrentTarget()) {
        return "invalid";
      }
      var parent = this.getParentOfLinearItem(this.linearIndex, this.treeId).parent;
      var newChildIndex = this.env.items[parent.item].children.indexOf(this.targetItem.item) + (this.offset === "top" ? 0 : 1);
      if (this.offset) {
        return {
          targetType: "between-items",
          treeId: this.treeId,
          parentItem: parent.item,
          depth: this.targetItem.depth,
          linearIndex: this.linearIndex + (this.offset === "top" ? 0 : 1),
          childIndex: newChildIndex,
          linePosition: this.offset
        };
      }
      return {
        targetType: "item",
        treeId: this.treeId,
        parentItem: parent.item,
        targetItem: this.targetItem.item,
        depth: this.targetItem.depth,
        linearIndex: this.linearIndex
      };
    };
    DraggingPositionEvaluation2.prototype.isDescendant = function(treeId, itemLinearIndex, potentialParents) {
      var _a = this.getParentOfLinearItem(itemLinearIndex, treeId), parentLinearIndex = _a.parentLinearIndex, parent = _a.parent;
      if (potentialParents.some(function(p) {
        return p.index === parent.item;
      })) {
        return true;
      }
      if (parent.depth === 0) {
        return false;
      }
      return this.isDescendant(treeId, parentLinearIndex, potentialParents);
    };
    DraggingPositionEvaluation2.prototype.areDraggingItemsDescendantOfTarget = function() {
      return this.draggingItems && this.isDescendant(this.treeId, this.linearIndex, this.draggingItems);
    };
    return DraggingPositionEvaluation2;
  }()
);

// node_modules/react-complex-tree/lib/esm/drag/useDraggingPosition.js
var useDraggingPosition = function() {
  var dragCode = (0, import_react9.useRef)("initial");
  var _a = (0, import_react9.useState)(void 0), draggingItems = _a[0], setDraggingItems = _a[1];
  var itemHeight = (0, import_react9.useRef)(0);
  var env = useTreeEnvironment();
  var getParentOfLinearItem = useGetGetParentOfLinearItem();
  var isNewDragPosition = useStableHandler(function(e, treeId, hoveringPosition) {
    if (!hoveringPosition) {
      return false;
    }
    var offset = hoveringPosition.offset, linearIndex = hoveringPosition.linearIndex;
    var newDragCode = "".concat(treeId, "__").concat(linearIndex, "__").concat(offset !== null && offset !== void 0 ? offset : "", "__").concat(hoveringPosition.indentation);
    if (newDragCode !== dragCode.current) {
      dragCode.current = newDragCode;
      return true;
    }
    return false;
  });
  var getHoveringPosition = useStableHandler(function(e, treeId, containerRef) {
    if (!containerRef.current) {
      return void 0;
    }
    var treeBb = containerRef.current.getBoundingClientRect();
    if (isOutsideOfContainer(e, treeBb)) {
      return void 0;
    }
    var hoveringPosition = (e.clientY - treeBb.top) / itemHeight.current;
    var treeLinearItems = env.linearItems[treeId];
    var linearIndex = Math.min(Math.max(0, Math.floor(hoveringPosition)), treeLinearItems.length - 1);
    if (treeLinearItems.length === 0) {
      return {
        linearIndex: 0,
        offset: "bottom",
        indentation: 0
      };
    }
    var targetLinearItem = treeLinearItems[linearIndex];
    var targetItem = env.items[targetLinearItem.item];
    var indentation = !env.renderDepthOffset ? void 0 : Math.max(Math.floor((e.clientX - treeBb.left) / env.renderDepthOffset), 0);
    var offset;
    var lineThreshold = !env.canReorderItems ? 0 : (targetItem === null || targetItem === void 0 ? void 0 : targetItem.isFolder) && env.canDropOnFolder || env.canDropOnNonFolder ? 0.2 : 0.5;
    if (hoveringPosition - 0.5 >= treeLinearItems.length - 1) {
      offset = "bottom";
    } else if (hoveringPosition % 1 < lineThreshold) {
      offset = "top";
    } else if (hoveringPosition % 1 > 1 - lineThreshold) {
      offset = "bottom";
    }
    return { linearIndex, offset, indentation };
  });
  var getDraggingPosition = useStableHandler(function(e, treeId, containerRef) {
    var hoveringPosition = getHoveringPosition(e, treeId, containerRef);
    if (!isNewDragPosition(e, treeId, hoveringPosition)) {
      return void 0;
    }
    if (!draggingItems || !env.canDragAndDrop || !hoveringPosition || e.clientX < 0 || e.clientY < 0) {
      return "invalid";
    }
    return new DraggingPositionEvaluation(env, e, treeId, hoveringPosition, draggingItems, getParentOfLinearItem).getDraggingPosition();
  });
  var initiateDraggingPosition = useStableHandler(function(treeId, items) {
    setDraggingItems(items);
    dragCode.current = "initial";
    itemHeight.current = computeItemHeight(treeId);
  });
  var resetDraggingPosition = useStableHandler(function() {
    setDraggingItems(void 0);
    dragCode.current = "initial";
    itemHeight.current = 0;
  });
  return {
    initiateDraggingPosition,
    resetDraggingPosition,
    draggingItems,
    getDraggingPosition,
    itemHeight
  };
};

// node_modules/react-complex-tree/lib/esm/drag/DragAndDropProvider.js
var DragAndDropContext = React2.createContext(null);
var useDragAndDrop = function() {
  return React2.useContext(DragAndDropContext);
};
var DragAndDropProvider = function(_a) {
  var children = _a.children;
  var environment = useTreeEnvironment();
  var _b = (0, import_react10.useState)(false), isProgrammaticallyDragging = _b[0], setIsProgrammaticallyDragging = _b[1];
  var _c = (0, import_react10.useState)({}), viableDragPositions = _c[0], setViableDragPositions = _c[1];
  var _d = (0, import_react10.useState)(0), programmaticDragIndex = _d[0], setProgrammaticDragIndex = _d[1];
  var _e = (0, import_react10.useState)(), draggingPosition = _e[0], setDraggingPosition = _e[1];
  var getViableDragPositions = useGetViableDragPositions();
  var callSoon = useCallSoon();
  var getOriginalItemOrder = useGetOriginalItemOrder();
  var _f = useDraggingPosition(), initiateDraggingPosition = _f.initiateDraggingPosition, resetDraggingPosition = _f.resetDraggingPosition, draggingItems = _f.draggingItems, getDraggingPosition = _f.getDraggingPosition, itemHeight = _f.itemHeight;
  var resetProgrammaticDragIndexForCurrentTree = (0, import_react10.useCallback)(function(viableDragPositions2, draggingItems2) {
    var _a2;
    if (environment.activeTreeId && ((_a2 = environment.viewState[environment.activeTreeId]) === null || _a2 === void 0 ? void 0 : _a2.focusedItem) && environment.linearItems && draggingItems2) {
      var focusItem_1 = environment.viewState[environment.activeTreeId].focusedItem;
      var treeDragPositions = getViableDragPositions(environment.activeTreeId, draggingItems2);
      var newPos = treeDragPositions.findIndex(function(pos) {
        if (pos.targetType === "item") {
          return pos.targetItem === focusItem_1;
        }
        if (pos.targetType === "between-items") {
          return environment.items[pos.parentItem].children[pos.childIndex] === focusItem_1;
        }
        return false;
      });
      if (newPos) {
        setProgrammaticDragIndex(Math.min(newPos + 1, treeDragPositions.length - 1));
      } else {
        setProgrammaticDragIndex(0);
      }
    } else {
      setProgrammaticDragIndex(0);
    }
  }, [
    environment.activeTreeId,
    environment.items,
    environment.linearItems,
    environment.viewState,
    getViableDragPositions
  ]);
  var resetState = useStableHandler(function() {
    setIsProgrammaticallyDragging(false);
    setViableDragPositions({});
    setProgrammaticDragIndex(0);
    setDraggingPosition(void 0);
    resetDraggingPosition();
  });
  useSideEffect(function() {
    if (environment.activeTreeId && environment.linearItems[environment.activeTreeId] && viableDragPositions[environment.activeTreeId]) {
      resetProgrammaticDragIndexForCurrentTree(viableDragPositions[environment.activeTreeId], draggingItems);
    }
  }, [
    draggingItems,
    environment.activeTreeId,
    environment.linearItems,
    resetProgrammaticDragIndexForCurrentTree,
    viableDragPositions
  ], [environment.activeTreeId]);
  useSideEffect(function() {
    if (isProgrammaticallyDragging && environment.activeTreeId) {
      setDraggingPosition(viableDragPositions[environment.activeTreeId][programmaticDragIndex]);
    }
  }, [
    programmaticDragIndex,
    environment.activeTreeId,
    isProgrammaticallyDragging,
    viableDragPositions
  ], [programmaticDragIndex, environment.activeTreeId]);
  var canDropAt = useCanDropAt();
  var performDrag = function(draggingPosition2) {
    var _a2;
    if (draggingItems && !canDropAt(draggingPosition2, draggingItems)) {
      return;
    }
    setDraggingPosition(draggingPosition2);
    environment.setActiveTree(draggingPosition2.treeId);
    if (draggingItems && environment.activeTreeId !== draggingPosition2.treeId) {
      (_a2 = environment.onSelectItems) === null || _a2 === void 0 ? void 0 : _a2.call(environment, draggingItems.map(function(item) {
        return item.index;
      }), draggingPosition2.treeId);
    }
  };
  var onDragOverTreeHandler = useStableHandler(function(e, treeId, containerRef) {
    if (!draggingItems)
      return;
    var newDraggingPosition = getDraggingPosition(e, treeId, containerRef);
    if (!newDraggingPosition)
      return;
    if (newDraggingPosition === "invalid") {
      setDraggingPosition(void 0);
      return;
    }
    performDrag(newDraggingPosition);
  });
  var onDragLeaveContainerHandler = useStableHandler(function(e, containerRef) {
    if (!containerRef.current)
      return;
    if (isOutsideOfContainer(e, containerRef.current.getBoundingClientRect())) {
      setDraggingPosition(void 0);
    }
  });
  var onDropHandler = useStableHandler(function() {
    if (!draggingItems || !draggingPosition || !environment.onDrop) {
      return;
    }
    environment.onDrop(draggingItems, draggingPosition);
    callSoon(function() {
      var _a2;
      (_a2 = environment.onFocusItem) === null || _a2 === void 0 ? void 0 : _a2.call(environment, draggingItems[0], draggingPosition.treeId);
      resetState();
    });
  });
  var onStartDraggingItems = (0, import_react10.useCallback)(function(items, treeId) {
    var treeViableDragPositions = buildMapForTrees(environment.treeIds, function(treeId2) {
      return getViableDragPositions(treeId2, items);
    });
    initiateDraggingPosition(treeId, items);
    setViableDragPositions(treeViableDragPositions);
    if (environment.activeTreeId) {
      resetProgrammaticDragIndexForCurrentTree(treeViableDragPositions[environment.activeTreeId], items);
    }
  }, [
    environment.activeTreeId,
    environment.treeIds,
    getViableDragPositions,
    initiateDraggingPosition,
    resetProgrammaticDragIndexForCurrentTree
  ]);
  var startProgrammaticDrag = (0, import_react10.useCallback)(function() {
    var _a2, _b2, _c2;
    if (!environment.canDragAndDrop) {
      return;
    }
    if (environment.activeTreeId) {
      var draggingItems_1 = (_b2 = (_a2 = environment.viewState[environment.activeTreeId]) === null || _a2 === void 0 ? void 0 : _a2.selectedItems) !== null && _b2 !== void 0 ? _b2 : [
        (_c2 = environment.viewState[environment.activeTreeId]) === null || _c2 === void 0 ? void 0 : _c2.focusedItem
      ];
      if (draggingItems_1.length === 0 || draggingItems_1[0] === void 0) {
        return;
      }
      var resolvedDraggingItems = getOriginalItemOrder(environment.activeTreeId, draggingItems_1.map(function(id) {
        return environment.items[id];
      }));
      if (environment.canDrag && !environment.canDrag(resolvedDraggingItems)) {
        return;
      }
      onStartDraggingItems(resolvedDraggingItems, environment.activeTreeId);
      setTimeout(function() {
        setIsProgrammaticallyDragging(true);
      });
    }
  }, [environment, getOriginalItemOrder, onStartDraggingItems]);
  var abortProgrammaticDrag = (0, import_react10.useCallback)(function() {
    resetState();
  }, [resetState]);
  var completeProgrammaticDrag = (0, import_react10.useCallback)(function() {
    onDropHandler();
    resetState();
  }, [onDropHandler, resetState]);
  var programmaticDragUp = (0, import_react10.useCallback)(function() {
    setProgrammaticDragIndex(function(oldIndex) {
      return Math.max(0, oldIndex - 1);
    });
  }, []);
  var programmaticDragDown = (0, import_react10.useCallback)(function() {
    if (environment.activeTreeId) {
      setProgrammaticDragIndex(function(oldIndex) {
        return Math.min(viableDragPositions[environment.activeTreeId].length, oldIndex + 1);
      });
    }
  }, [environment.activeTreeId, viableDragPositions]);
  var dnd = (0, import_react10.useMemo)(function() {
    return {
      onStartDraggingItems,
      startProgrammaticDrag,
      abortProgrammaticDrag,
      completeProgrammaticDrag,
      programmaticDragUp,
      programmaticDragDown,
      draggingItems,
      draggingPosition,
      itemHeight: itemHeight.current,
      isProgrammaticallyDragging,
      onDragOverTreeHandler,
      onDragLeaveContainerHandler,
      viableDragPositions
    };
  }, [
    abortProgrammaticDrag,
    completeProgrammaticDrag,
    draggingItems,
    draggingPosition,
    isProgrammaticallyDragging,
    itemHeight,
    onDragOverTreeHandler,
    onDragLeaveContainerHandler,
    onStartDraggingItems,
    programmaticDragDown,
    programmaticDragUp,
    startProgrammaticDrag,
    viableDragPositions
  ]);
  (0, import_react10.useEffect)(function() {
    window.addEventListener("dragend", resetState);
    window.addEventListener("drop", onDropHandler);
    return function() {
      window.removeEventListener("dragend", resetState);
      window.removeEventListener("drop", onDropHandler);
    };
  }, [onDropHandler, resetState]);
  return React2.createElement(DragAndDropContext.Provider, { value: dnd }, children);
};

// node_modules/react-complex-tree/lib/esm/environmentActions/EnvironmentActionsProvider.js
var React3 = __toESM(require_react());
var import_react12 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/environmentActions/useCreatedEnvironmentRef.js
var import_react11 = __toESM(require_react());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var useCreatedEnvironmentRef = function(ref, actions) {
  var environment = useTreeEnvironment();
  var dnd = useDragAndDrop();
  (0, import_react11.useImperativeHandle)(ref, function() {
    return __assign3(__assign3(__assign3({}, actions), environment), { treeEnvironmentContext: environment, dragAndDropContext: dnd });
  });
};

// node_modules/react-complex-tree/lib/esm/waitFor.js
var waitFor = function(check, intervalMs, timeoutMs) {
  if (intervalMs === void 0) {
    intervalMs = 50;
  }
  if (timeoutMs === void 0) {
    timeoutMs = 1e4;
  }
  return new Promise(function(resolve) {
    if (check()) {
      resolve();
    }
    var complete;
    var interval = setInterval(function() {
      if (check()) {
        complete();
      }
    }, intervalMs);
    var timeout = setTimeout(function() {
      complete();
    }, timeoutMs);
    complete = function() {
      clearInterval(interval);
      clearTimeout(timeout);
      resolve();
    };
  });
};

// node_modules/react-complex-tree/lib/esm/environmentActions/EnvironmentActionsProvider.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var EnvironmentActionsContext = React3.createContext(null);
var useEnvironmentActions = function() {
  return React3.useContext(EnvironmentActionsContext);
};
var recursiveExpand = function(itemId, items, onExpand) {
  return __awaiter(void 0, void 0, void 0, function() {
    var _loop_1, _i, _a, childId;
    var _b, _c, _d;
    return __generator(this, function(_e) {
      _loop_1 = function(childId2) {
        waitFor(function() {
          var _a2;
          return !!((_a2 = items.current) === null || _a2 === void 0 ? void 0 : _a2[childId2]);
        }).then(function() {
          var _a2;
          var item = (_a2 = items.current) === null || _a2 === void 0 ? void 0 : _a2[childId2];
          if (item === null || item === void 0 ? void 0 : item.isFolder) {
            onExpand(item);
            recursiveExpand(childId2, items, onExpand);
          }
        });
      };
      for (_i = 0, _a = (_d = (_c = (_b = items.current) === null || _b === void 0 ? void 0 : _b[itemId]) === null || _c === void 0 ? void 0 : _c.children) !== null && _d !== void 0 ? _d : []; _i < _a.length; _i++) {
        childId = _a[_i];
        _loop_1(childId);
      }
      return [
        2
        /*return*/
      ];
    });
  });
};
var EnvironmentActionsProvider = React3.forwardRef(function(props, ref) {
  var _a = useTreeEnvironment(), onCollapseItem = _a.onCollapseItem, items = _a.items, trees = _a.trees, viewState = _a.viewState, onExpandItem = _a.onExpandItem, onFocusItem = _a.onFocusItem, setActiveTree = _a.setActiveTree, onRenameItem = _a.onRenameItem, onSelectItems = _a.onSelectItems, onPrimaryAction = _a.onPrimaryAction, linearItems = _a.linearItems;
  var _b = useDragAndDrop(), abortProgrammaticDrag = _b.abortProgrammaticDrag, completeProgrammaticDrag = _b.completeProgrammaticDrag, programmaticDragDown = _b.programmaticDragDown, programmaticDragUp = _b.programmaticDragUp, startProgrammaticDrag = _b.startProgrammaticDrag;
  var itemsRef = useRefCopy(items);
  var collapseItem = (0, import_react12.useCallback)(function(itemId, treeId) {
    onCollapseItem === null || onCollapseItem === void 0 ? void 0 : onCollapseItem(items[itemId], treeId);
  }, [items, onCollapseItem]);
  var expandItem = (0, import_react12.useCallback)(function(itemId, treeId) {
    onExpandItem === null || onExpandItem === void 0 ? void 0 : onExpandItem(items[itemId], treeId);
  }, [items, onExpandItem]);
  var focusItem = (0, import_react12.useCallback)(function(itemId, treeId, setDomFocus) {
    if (setDomFocus === void 0) {
      setDomFocus = true;
    }
    onFocusItem === null || onFocusItem === void 0 ? void 0 : onFocusItem(items[itemId], treeId, setDomFocus);
  }, [items, onFocusItem]);
  var focusTree = (0, import_react12.useCallback)(function(treeId, autoFocus) {
    if (autoFocus === void 0) {
      autoFocus = true;
    }
    setActiveTree(treeId, autoFocus);
  }, [setActiveTree]);
  var moveFocusDown = (0, import_react12.useCallback)(function(treeId) {
    var treeLinearItems = linearItems[treeId];
    var currentFocusIndex = treeLinearItems.findIndex(function(_a2) {
      var _b2;
      var item = _a2.item;
      return item === ((_b2 = viewState[treeId]) === null || _b2 === void 0 ? void 0 : _b2.focusedItem);
    });
    var newIndex = currentFocusIndex !== void 0 ? Math.min(treeLinearItems.length - 1, currentFocusIndex + 1) : 0;
    var newItem = items[treeLinearItems[newIndex].item];
    onFocusItem === null || onFocusItem === void 0 ? void 0 : onFocusItem(newItem, treeId);
  }, [items, linearItems, onFocusItem, viewState]);
  var moveFocusUp = (0, import_react12.useCallback)(function(treeId) {
    var treeLinearItems = linearItems[treeId];
    var currentFocusIndex = treeLinearItems.findIndex(function(_a2) {
      var _b2;
      var item = _a2.item;
      return item === ((_b2 = viewState[treeId]) === null || _b2 === void 0 ? void 0 : _b2.focusedItem);
    });
    var newIndex = currentFocusIndex !== void 0 ? Math.max(0, currentFocusIndex - 1) : 0;
    var newItem = items[treeLinearItems[newIndex].item];
    onFocusItem === null || onFocusItem === void 0 ? void 0 : onFocusItem(newItem, treeId);
  }, [items, linearItems, onFocusItem, viewState]);
  var renameItem = (0, import_react12.useCallback)(function(itemId, name, treeId) {
    onRenameItem === null || onRenameItem === void 0 ? void 0 : onRenameItem(items[itemId], name, treeId);
  }, [items, onRenameItem]);
  var selectItems = (0, import_react12.useCallback)(function(itemsIds, treeId) {
    onSelectItems === null || onSelectItems === void 0 ? void 0 : onSelectItems(itemsIds, treeId);
  }, [onSelectItems]);
  var toggleItemExpandedState = (0, import_react12.useCallback)(function(itemId, treeId) {
    var _a2, _b2;
    if ((_b2 = (_a2 = viewState[treeId]) === null || _a2 === void 0 ? void 0 : _a2.expandedItems) === null || _b2 === void 0 ? void 0 : _b2.includes(itemId)) {
      onCollapseItem === null || onCollapseItem === void 0 ? void 0 : onCollapseItem(items[itemId], treeId);
    } else {
      onExpandItem === null || onExpandItem === void 0 ? void 0 : onExpandItem(items[itemId], treeId);
    }
  }, [items, onCollapseItem, onExpandItem, viewState]);
  var toggleItemSelectStatus = (0, import_react12.useCallback)(function(itemId, treeId) {
    var _a2, _b2, _c, _d, _e;
    if ((_b2 = (_a2 = viewState[treeId]) === null || _a2 === void 0 ? void 0 : _a2.selectedItems) === null || _b2 === void 0 ? void 0 : _b2.includes(itemId)) {
      onSelectItems === null || onSelectItems === void 0 ? void 0 : onSelectItems((_d = (_c = viewState[treeId].selectedItems) === null || _c === void 0 ? void 0 : _c.filter(function(item) {
        return item !== itemId;
      })) !== null && _d !== void 0 ? _d : [], treeId);
    } else {
      onSelectItems === null || onSelectItems === void 0 ? void 0 : onSelectItems(__spreadArray2(__spreadArray2([], (_e = viewState[treeId].selectedItems) !== null && _e !== void 0 ? _e : [], true), [itemId], false), treeId);
    }
  }, [onSelectItems, viewState]);
  var invokePrimaryAction = (0, import_react12.useCallback)(function(itemId, treeId) {
    onPrimaryAction === null || onPrimaryAction === void 0 ? void 0 : onPrimaryAction(items[itemId], treeId);
  }, [items, onPrimaryAction]);
  var expandSubsequently = (0, import_react12.useCallback)(function(treeId, itemIds) {
    return __awaiter(void 0, void 0, void 0, function() {
      var current, rest;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            current = itemIds[0], rest = itemIds.slice(1);
            return [4, waitFor(function() {
              var _a3;
              return !!((_a3 = itemsRef.current) === null || _a3 === void 0 ? void 0 : _a3[current]);
            }).then(function() {
              var item = itemsRef.current[current];
              if (!item) {
                return Promise.resolve();
              }
              onExpandItem === null || onExpandItem === void 0 ? void 0 : onExpandItem(item, treeId);
              if (rest.length > 0) {
                return expandSubsequently(treeId, rest);
              }
              return Promise.resolve();
            })];
          case 1:
            _a2.sent();
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [itemsRef, onExpandItem]);
  var expandAll = (0, import_react12.useCallback)(function(treeId) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            return [4, recursiveExpand(trees[treeId].rootItem, itemsRef, function(item) {
              return onExpandItem === null || onExpandItem === void 0 ? void 0 : onExpandItem(item, treeId);
            })];
          case 1:
            _a2.sent();
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, [itemsRef, onExpandItem, trees]);
  var collapseAll = (0, import_react12.useCallback)(function(treeId) {
    var _a2, _b2;
    for (var _i = 0, _c = (_b2 = (_a2 = viewState[treeId]) === null || _a2 === void 0 ? void 0 : _a2.expandedItems) !== null && _b2 !== void 0 ? _b2 : []; _i < _c.length; _i++) {
      var itemId = _c[_i];
      onCollapseItem === null || onCollapseItem === void 0 ? void 0 : onCollapseItem(items[itemId], treeId);
    }
  }, [items, onCollapseItem, viewState]);
  var actions = (0, import_react12.useMemo)(function() {
    return {
      collapseItem,
      expandItem,
      focusItem,
      focusTree,
      moveFocusDown,
      moveFocusUp,
      renameItem,
      selectItems,
      toggleItemExpandedState,
      toggleItemSelectStatus,
      invokePrimaryAction,
      expandAll,
      expandSubsequently,
      collapseAll,
      abortProgrammaticDrag,
      completeProgrammaticDrag,
      moveProgrammaticDragPositionDown: programmaticDragDown,
      moveProgrammaticDragPositionUp: programmaticDragUp,
      startProgrammaticDrag
    };
  }, [
    collapseItem,
    expandItem,
    focusItem,
    focusTree,
    moveFocusDown,
    moveFocusUp,
    renameItem,
    selectItems,
    toggleItemExpandedState,
    toggleItemSelectStatus,
    invokePrimaryAction,
    expandAll,
    expandSubsequently,
    collapseAll,
    abortProgrammaticDrag,
    completeProgrammaticDrag,
    programmaticDragDown,
    programmaticDragUp,
    startProgrammaticDrag
  ]);
  useCreatedEnvironmentRef(ref, actions);
  return React3.createElement(EnvironmentActionsContext.Provider, { value: actions }, props.children);
});

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/useControlledTreeEnvironmentProps.js
var import_react15 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/tree/scrollIntoView.js
var scrollIntoView = function(element) {
  var _a, _b, _c, _d;
  if (!element) {
    return;
  }
  if (element.scrollIntoViewIfNeeded) {
    element.scrollIntoViewIfNeeded();
  } else {
    var boundingBox = element.getBoundingClientRect();
    var isElementInViewport = boundingBox.top >= 0 && boundingBox.left >= 0 && boundingBox.bottom <= (window.innerHeight || !!((_b = (_a = getDocument()) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.clientHeight)) && boundingBox.right <= (window.innerWidth || !!((_d = (_c = getDocument()) === null || _c === void 0 ? void 0 : _c.documentElement) === null || _d === void 0 ? void 0 : _d.clientWidth));
    if (!isElementInViewport) {
      element.scrollIntoView();
    }
  }
};

// node_modules/react-complex-tree/lib/esm/renderers/useRenderers.js
var import_react14 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/renderers/createDefaultRenderers.js
var import_react13 = __toESM(require_react());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var cx = function() {
  var classNames = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    classNames[_i] = arguments[_i];
  }
  return classNames.filter(function(cn) {
    return !!cn;
  }).join(" ");
};
var createDefaultRenderers = function(renderDepthOffset, rtl) {
  return {
    renderItemTitle: function(_a) {
      var title = _a.title, context = _a.context, info = _a.info;
      if (!info.isSearching || !context.isSearchMatching) {
        return title;
      }
      var startIndex = title.toLowerCase().indexOf(info.search.toLowerCase());
      return import_react13.default.createElement(
        import_react13.default.Fragment,
        null,
        startIndex > 0 && import_react13.default.createElement("span", null, title.slice(0, startIndex)),
        import_react13.default.createElement("span", { className: "rct-tree-item-search-highlight" }, title.slice(startIndex, startIndex + info.search.length)),
        startIndex + info.search.length < title.length && import_react13.default.createElement("span", null, title.slice(startIndex + info.search.length, title.length))
      );
    },
    renderItemArrow: function(_a) {
      var item = _a.item, context = _a.context;
      return (
        // Icons from https://blueprintjs.com/docs/#icons
        import_react13.default.createElement("div", __assign4({ className: cx(item.isFolder && "rct-tree-item-arrow-isFolder", context.isExpanded && "rct-tree-item-arrow-expanded", "rct-tree-item-arrow") }, context.arrowProps), item.isFolder && (context.isExpanded ? import_react13.default.createElement(
          "svg",
          { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 16 16", enableBackground: "new 0 0 16 16", xmlSpace: "preserve" },
          import_react13.default.createElement(
            "g",
            null,
            import_react13.default.createElement(
              "g",
              null,
              import_react13.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z", className: "rct-tree-item-arrow-path" })
            )
          )
        ) : import_react13.default.createElement(
          "svg",
          { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 16 16", enableBackground: "new 0 0 16 16", xmlSpace: "preserve" },
          import_react13.default.createElement(
            "g",
            null,
            import_react13.default.createElement(
              "g",
              null,
              import_react13.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z", className: "rct-tree-item-arrow-path" })
            )
          )
        )))
      );
    },
    renderItem: function(_a) {
      var item = _a.item, depth = _a.depth, children = _a.children, title = _a.title, context = _a.context, arrow = _a.arrow;
      var InteractiveComponent = context.isRenaming ? "div" : "button";
      var type = context.isRenaming ? void 0 : "button";
      return import_react13.default.createElement(
        "li",
        __assign4({}, context.itemContainerWithChildrenProps, { className: cx("rct-tree-item-li", item.isFolder && "rct-tree-item-li-isFolder", context.isSelected && "rct-tree-item-li-selected", context.isExpanded && "rct-tree-item-li-expanded", context.isFocused && "rct-tree-item-li-focused", context.isDraggingOver && "rct-tree-item-li-dragging-over", context.isSearchMatching && "rct-tree-item-li-search-match") }),
        import_react13.default.createElement(
          "div",
          __assign4({}, context.itemContainerWithoutChildrenProps, { style: { "--depthOffset": "".concat((depth + 1) * renderDepthOffset, "px") }, className: cx("rct-tree-item-title-container", item.isFolder && "rct-tree-item-title-container-isFolder", context.isSelected && "rct-tree-item-title-container-selected", context.isExpanded && "rct-tree-item-title-container-expanded", context.isFocused && "rct-tree-item-title-container-focused", context.isDraggingOver && "rct-tree-item-title-container-dragging-over", context.isSearchMatching && "rct-tree-item-title-container-search-match") }),
          arrow,
          import_react13.default.createElement(InteractiveComponent, __assign4({ type }, context.interactiveElementProps, { className: cx("rct-tree-item-button", item.isFolder && "rct-tree-item-button-isFolder", context.isSelected && "rct-tree-item-button-selected", context.isExpanded && "rct-tree-item-button-expanded", context.isFocused && "rct-tree-item-button-focused", context.isDraggingOver && "rct-tree-item-button-dragging-over", context.isSearchMatching && "rct-tree-item-button-search-match") }), title)
        ),
        children
      );
    },
    renderRenameInput: function(_a) {
      var inputProps = _a.inputProps, inputRef = _a.inputRef, submitButtonProps = _a.submitButtonProps, submitButtonRef = _a.submitButtonRef, formProps = _a.formProps;
      return import_react13.default.createElement(
        "form",
        __assign4({}, formProps, { className: "rct-tree-item-renaming-form" }),
        import_react13.default.createElement("input", __assign4({}, inputProps, { ref: inputRef, className: "rct-tree-item-renaming-input" })),
        import_react13.default.createElement("input", __assign4({}, submitButtonProps, { ref: submitButtonRef, type: "submit", className: "rct-tree-item-renaming-submit-button", value: "🗸" }))
      );
    },
    renderTreeContainer: function(_a) {
      var children = _a.children, containerProps = _a.containerProps, info = _a.info;
      return import_react13.default.createElement(
        "div",
        { className: cx("rct-tree-root", info.isFocused && "rct-tree-root-focus", info.isRenaming && "rct-tree-root-renaming", info.areItemsSelected && "rct-tree-root-itemsselected", rtl && "rct-rtl") },
        import_react13.default.createElement("div", __assign4({}, containerProps, { style: __assign4({ minHeight: "30px" }, containerProps.style) }), children)
      );
    },
    renderItemsContainer: function(_a) {
      var children = _a.children, containerProps = _a.containerProps;
      return import_react13.default.createElement("ul", __assign4({}, containerProps, { className: "rct-tree-items-container" }), children);
    },
    renderDragBetweenLine: function(_a) {
      var draggingPosition = _a.draggingPosition, lineProps = _a.lineProps;
      return import_react13.default.createElement("div", __assign4({}, lineProps, { style: { left: "".concat(draggingPosition.depth * renderDepthOffset, "px") }, className: cx("rct-tree-drag-between-line", draggingPosition.targetType === "between-items" && draggingPosition.linePosition === "top" && "rct-tree-drag-between-line-top", draggingPosition.targetType === "between-items" && draggingPosition.linePosition === "bottom" && "rct-tree-drag-between-line-bottom") }));
    },
    renderSearchInput: function(_a) {
      var inputProps = _a.inputProps;
      return import_react13.default.createElement(
        "div",
        { className: cx("rct-tree-search-input-container") },
        import_react13.default.createElement("span", { className: "rct-tree-input-icon" }),
        import_react13.default.createElement("input", __assign4({}, inputProps, { className: cx("rct-tree-search-input") }))
      );
    },
    renderLiveDescriptorContainer: function(_a) {
      var tree = _a.tree, children = _a.children;
      return import_react13.default.createElement("div", { id: "rct-livedescription-".concat(tree.treeId), style: {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        overflow: "hidden",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
      } }, children);
    },
    renderDepthOffset
  };
};

// node_modules/react-complex-tree/lib/esm/renderers/useRenderers.js
var useRenderers = function(_a) {
  var renderItem = _a.renderItem, renderItemTitle = _a.renderItemTitle, renderItemArrow = _a.renderItemArrow, renderRenameInput = _a.renderRenameInput, renderItemsContainer = _a.renderItemsContainer, renderTreeContainer = _a.renderTreeContainer, renderDragBetweenLine = _a.renderDragBetweenLine, renderSearchInput = _a.renderSearchInput, renderLiveDescriptorContainer = _a.renderLiveDescriptorContainer, renderDepthOffset = _a.renderDepthOffset;
  var defaultRenderers = (0, import_react14.useMemo)(function() {
    return createDefaultRenderers(renderDepthOffset !== null && renderDepthOffset !== void 0 ? renderDepthOffset : 10);
  }, [renderDepthOffset]);
  var customRenderers = {
    renderItem,
    renderItemTitle,
    renderItemArrow,
    renderRenameInput,
    renderItemsContainer,
    renderTreeContainer,
    renderDragBetweenLine,
    renderSearchInput,
    renderLiveDescriptorContainer,
    renderDepthOffset
  };
  var renderers = Object.entries(defaultRenderers).reduce(function(acc, _a2) {
    var key = _a2[0], value = _a2[1];
    var keyMapped = key;
    if (customRenderers[keyMapped]) {
      acc[keyMapped] = customRenderers[keyMapped];
    } else {
      acc[keyMapped] = value;
    }
    return acc;
  }, {});
  renderers.renderItem.displayName = "RenderItem";
  renderers.renderItemTitle.displayName = "RenderItemTitle";
  renderers.renderItemArrow.displayName = "RenderItemArrow";
  renderers.renderRenameInput.displayName = "RenderRenameInput";
  renderers.renderItemsContainer.displayName = "RenderItemsContainer";
  renderers.renderTreeContainer.displayName = "RenderTreeContainer";
  renderers.renderDragBetweenLine.displayName = "RenderDragBetweenLine";
  renderers.renderSearchInput.displayName = "RenderSearchInput";
  return renderers;
};

// node_modules/react-complex-tree/lib/esm/tree/getItemsLinearly.js
var getItemsLinearly = function(rootItem, viewState, items, depth) {
  var _a, _b, _c;
  if (depth === void 0) {
    depth = 0;
  }
  var itemIds = [];
  for (var _i = 0, _d = (_b = (_a = items[rootItem]) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []; _i < _d.length; _i++) {
    var itemId = _d[_i];
    var item = items[itemId];
    itemIds.push({ item: itemId, depth });
    if (item && item.isFolder && !!item.children && ((_c = viewState.expandedItems) === null || _c === void 0 ? void 0 : _c.includes(itemId))) {
      itemIds.push.apply(itemIds, getItemsLinearly(itemId, viewState, items, depth + 1));
    }
  }
  return itemIds;
};

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/useControlledTreeEnvironmentProps.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var useControlledTreeEnvironmentProps = function(_a) {
  var onExpandItemProp = _a.onExpandItem, onCollapseProp = _a.onCollapseItem, onDropProp = _a.onDrop, props = __rest(_a, ["onExpandItem", "onCollapseItem", "onDrop"]);
  var _b = (0, import_react15.useState)({}), trees = _b[0], setTrees = _b[1];
  var _c = (0, import_react15.useState)(), activeTreeId = _c[0], setActiveTreeId = _c[1];
  var treeIds = (0, import_react15.useMemo)(function() {
    return Object.keys(trees);
  }, [trees]);
  var onFocusItem = props.onFocusItem, autoFocus = props.autoFocus, onRegisterTree = props.onRegisterTree, onUnregisterTree = props.onUnregisterTree, items = props.items, viewState = props.viewState;
  var onFocusItemRef = useRefCopy(onFocusItem);
  var viewStateRef = useRefCopy(viewState);
  var linearItems = (0, import_react15.useMemo)(function() {
    return buildMapForTrees(treeIds, function(treeId) {
      var _a2;
      return getItemsLinearly(trees[treeId].rootItem, (_a2 = viewState[treeId]) !== null && _a2 !== void 0 ? _a2 : {}, items);
    });
  }, [trees, items, treeIds, viewState]);
  var onFocusItemHandler = (0, import_react15.useCallback)(function(item, treeId, setDomFocus) {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _j;
    if (setDomFocus === void 0) {
      setDomFocus = true;
    }
    if ((autoFocus !== null && autoFocus !== void 0 ? autoFocus : true) && setDomFocus) {
      var newItem = (_b2 = (_a2 = getDocument()) === null || _a2 === void 0 ? void 0 : _a2.querySelector('[data-rct-tree="'.concat(treeId, '"] [data-rct-item-id="').concat(item.index, '"]'))) !== null && _b2 !== void 0 ? _b2 : (_c2 = getDocument()) === null || _c2 === void 0 ? void 0 : _c2.querySelector('[data-rct-tree="'.concat(treeId, '"] [data-rct-item-id]'));
      if (((_f = (_e = (_d = getDocument()) === null || _d === void 0 ? void 0 : _d.activeElement) === null || _e === void 0 ? void 0 : _e.attributes.getNamedItem("data-rct-search-input")) === null || _f === void 0 ? void 0 : _f.value) !== "true") {
        (_g = newItem === null || newItem === void 0 ? void 0 : newItem.focus) === null || _g === void 0 ? void 0 : _g.call(newItem);
      } else {
        scrollIntoView(newItem);
      }
    }
    if (((_h = viewStateRef.current[treeId]) === null || _h === void 0 ? void 0 : _h.focusedItem) === item.index) {
      return;
    }
    (_j = onFocusItemRef.current) === null || _j === void 0 ? void 0 : _j.call(onFocusItemRef, item, treeId);
  }, [autoFocus, onFocusItemRef, viewStateRef]);
  var registerTree = (0, import_react15.useCallback)(function(tree) {
    setTrees(function(trees2) {
      var _a2;
      return __assign5(__assign5({}, trees2), (_a2 = {}, _a2[tree.treeId] = tree, _a2));
    });
    onRegisterTree === null || onRegisterTree === void 0 ? void 0 : onRegisterTree(tree);
  }, [onRegisterTree]);
  var unregisterTree = (0, import_react15.useCallback)(function(treeId) {
    onUnregisterTree === null || onUnregisterTree === void 0 ? void 0 : onUnregisterTree(trees[treeId]);
    delete trees[treeId];
    setTrees(trees);
  }, [onUnregisterTree, trees]);
  var onCollapseItem = (0, import_react15.useCallback)(function(item, treeId) {
    onCollapseProp === null || onCollapseProp === void 0 ? void 0 : onCollapseProp(item, treeId);
    setTrees(function(trees2) {
      return trees2;
    });
  }, [onCollapseProp]);
  var onExpandItem = (0, import_react15.useCallback)(function(item, treeId) {
    onExpandItemProp === null || onExpandItemProp === void 0 ? void 0 : onExpandItemProp(item, treeId);
    setTrees(function(trees2) {
      return trees2;
    });
  }, [onExpandItemProp]);
  var onDrop = (0, import_react15.useCallback)(function(items2, target) {
    onDropProp === null || onDropProp === void 0 ? void 0 : onDropProp(items2, target);
    setTrees(function(trees2) {
      return trees2;
    });
  }, [onDropProp]);
  var focusTree = (0, import_react15.useCallback)(function(treeId) {
    var _a2, _b2;
    var focusItem = (_a2 = getDocument()) === null || _a2 === void 0 ? void 0 : _a2.querySelector('[data-rct-tree="'.concat(treeId, '"] [data-rct-item-focus="true"]'));
    (_b2 = focusItem === null || focusItem === void 0 ? void 0 : focusItem.focus) === null || _b2 === void 0 ? void 0 : _b2.call(focusItem);
  }, []);
  var setActiveTree = (0, import_react15.useCallback)(function(treeIdOrSetStateFunction, autoFocusTree) {
    if (autoFocusTree === void 0) {
      autoFocusTree = true;
    }
    var maybeFocusTree = function(treeId2) {
      var _a2, _b2;
      if (autoFocusTree && (autoFocus !== null && autoFocus !== void 0 ? autoFocus : true) && treeId2 && !((_b2 = (_a2 = getDocument()) === null || _a2 === void 0 ? void 0 : _a2.querySelector('[data-rct-tree="'.concat(treeId2, '"]'))) === null || _b2 === void 0 ? void 0 : _b2.contains(document.activeElement))) {
        focusTree(treeId2);
      }
    };
    if (typeof treeIdOrSetStateFunction === "function") {
      setActiveTreeId(function(oldValue) {
        var treeId2 = treeIdOrSetStateFunction(oldValue);
        if (treeId2 !== oldValue) {
          maybeFocusTree(treeId2);
        }
        return treeId2;
      });
    } else {
      var treeId = treeIdOrSetStateFunction;
      setActiveTreeId(treeId);
      maybeFocusTree(treeId);
    }
  }, [autoFocus, focusTree]);
  var renderers = useRenderers(props);
  return __assign5(__assign5(__assign5({}, renderers), props), { onFocusItem: onFocusItemHandler, registerTree, unregisterTree, onExpandItem, onCollapseItem, onDrop, setActiveTree, treeIds, trees, activeTreeId, linearItems });
};

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/ControlledTreeEnvironment.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var TreeEnvironmentContext = React5.createContext(null);
var useTreeEnvironment = function() {
  return (0, import_react16.useContext)(TreeEnvironmentContext);
};
var ControlledTreeEnvironment = React5.forwardRef(function(props, ref) {
  var _a, _b, _c;
  var environmentContextProps = useControlledTreeEnvironmentProps(props);
  var viewState = props.viewState;
  for (var _i = 0, _d = Object.keys(environmentContextProps.trees); _i < _d.length; _i++) {
    var treeId = _d[_i];
    if (!((_a = viewState[treeId]) === null || _a === void 0 ? void 0 : _a.focusedItem) && environmentContextProps.trees[treeId]) {
      viewState[treeId] = __assign6(__assign6({}, viewState[treeId]), { focusedItem: (_c = (_b = props.items[environmentContextProps.trees[treeId].rootItem]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c[0] });
    }
  }
  return React5.createElement(
    TreeEnvironmentContext.Provider,
    { value: environmentContextProps },
    React5.createElement(
      InteractionManagerProvider,
      null,
      React5.createElement(
        DragAndDropProvider,
        null,
        React5.createElement(EnvironmentActionsProvider, { ref }, props.children)
      )
    )
  );
});

// node_modules/react-complex-tree/lib/esm/tree/TreeManager.js
var React9 = __toESM(require_react());
var import_react23 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/tree/DragBetweenLine.js
var React6 = __toESM(require_react());
var DragBetweenLine = function(_a) {
  var _b;
  var treeId = _a.treeId;
  var _c = useDragAndDrop(), draggingPosition = _c.draggingPosition, itemHeight = _c.itemHeight;
  var renderers = useTree().renderers;
  var shouldDisplay = draggingPosition && draggingPosition.targetType === "between-items" && draggingPosition.treeId === treeId;
  if (!shouldDisplay) {
    return null;
  }
  var lineProps = {
    onDragOver: function(e) {
      return e.preventDefault();
    }
    // Allow dropping
  };
  return React6.createElement("div", { style: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "".concat(((_b = draggingPosition === null || draggingPosition === void 0 ? void 0 : draggingPosition.linearIndex) !== null && _b !== void 0 ? _b : 0) * itemHeight, "px")
  } }, renderers.renderDragBetweenLine({
    draggingPosition,
    lineProps
  }));
};

// node_modules/react-complex-tree/lib/esm/tree/useFocusWithin.js
var import_react18 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/useHtmlElementEventListener.js
var import_react17 = __toESM(require_react());
var useHtmlElementEventListener = function(element, type, listener) {
  var stableListener = useStableHandler(listener);
  (0, import_react17.useEffect)(function() {
    if (element) {
      element.addEventListener(type, stableListener);
      return function() {
        return element.removeEventListener(type, stableListener);
      };
    }
    return function() {
    };
  }, [element, stableListener, type]);
};

// node_modules/react-complex-tree/lib/esm/tree/useFocusWithin.js
var useFocusWithin = function(element, onFocusIn, onFocusOut) {
  var _a = (0, import_react18.useState)(false), focusWithin = _a[0], setFocusWithin = _a[1];
  var isLoosingFocusFlag = (0, import_react18.useRef)(false);
  var callSoon = useCallSoon();
  useHtmlElementEventListener(element, "focusin", function() {
    if (!focusWithin) {
      setFocusWithin(true);
      onFocusIn === null || onFocusIn === void 0 ? void 0 : onFocusIn();
    }
    if (isLoosingFocusFlag.current) {
      isLoosingFocusFlag.current = false;
    }
  });
  useHtmlElementEventListener(element, "focusout", function() {
    isLoosingFocusFlag.current = true;
    callSoon(function() {
      if (isLoosingFocusFlag.current && !(element === null || element === void 0 ? void 0 : element.contains(document.activeElement))) {
        onFocusOut === null || onFocusOut === void 0 ? void 0 : onFocusOut();
        isLoosingFocusFlag.current = false;
        setFocusWithin(false);
      }
    });
  });
  return focusWithin;
};

// node_modules/react-complex-tree/lib/esm/hotkeys/useKey.js
var useKey = function(key, onHit, active) {
  useHtmlElementEventListener(getDocument(), "keydown", function(e) {
    if (!active) {
      return;
    }
    if (active && key.toLowerCase() === e.key.toLowerCase()) {
      onHit(e);
    }
  });
};

// node_modules/react-complex-tree/lib/esm/hotkeys/useHotkey.js
var import_react20 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/hotkeys/useKeyboardBindings.js
var import_react19 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/hotkeys/defaultKeyboardBindings.js
var defaultKeyboardBindings = {
  expandSiblings: ["control+*"],
  moveFocusToFirstItem: ["home"],
  moveFocusToLastItem: ["end"],
  primaryAction: ["enter"],
  renameItem: ["f2"],
  abortRenameItem: ["escape"],
  toggleSelectItem: ["control+space"],
  abortSearch: ["escape", "enter"],
  startSearch: [],
  selectAll: ["control+a"],
  startProgrammaticDnd: ["control+d"],
  completeProgrammaticDnd: ["enter"],
  abortProgrammaticDnd: ["escape"]
};

// node_modules/react-complex-tree/lib/esm/hotkeys/useKeyboardBindings.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var useKeyboardBindings = function() {
  var environment = useTreeEnvironment();
  return (0, import_react19.useMemo)(function() {
    if (environment.keyboardBindings) {
      return __assign7(__assign7({}, defaultKeyboardBindings), environment.keyboardBindings);
    }
    return defaultKeyboardBindings;
  }, [environment.keyboardBindings]);
};

// node_modules/react-complex-tree/lib/esm/hotkeys/useHotkey.js
var elementsThatCanTakeText = ["input", "textarea"];
var useHotkey = function(combinationName, onHit, active, activatableWhileFocusingInput) {
  if (activatableWhileFocusingInput === void 0) {
    activatableWhileFocusingInput = false;
  }
  var pressedKeys = (0, import_react20.useRef)([]);
  var keyboardBindings = useKeyboardBindings();
  var callSoon = useCallSoon();
  var possibleCombinations = (0, import_react20.useMemo)(function() {
    return keyboardBindings[combinationName].map(function(combination) {
      return combination.split("+");
    });
  }, [combinationName, keyboardBindings]);
  useHtmlElementEventListener(getDocument(), "keydown", function(e) {
    var _a;
    if (active === false) {
      return;
    }
    if ((elementsThatCanTakeText.includes((_a = e.target.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || e.target.isContentEditable) && !activatableWhileFocusingInput) {
      return;
    }
    if (!pressedKeys.current.includes(e.key)) {
      pressedKeys.current.push(e.key);
      var pressedKeysLowercase_1 = pressedKeys.current.map(function(key) {
        return key.toLowerCase();
      });
      var partialMatch = possibleCombinations.map(function(combination) {
        return pressedKeysLowercase_1.map(function(key) {
          return combination.includes(key.toLowerCase());
        }).reduce(function(a, b) {
          return a && b;
        }, true);
      }).reduce(function(a, b) {
        return a || b;
      }, false);
      if (partialMatch) {
        if (pressedKeys.current.length > 1 || !/^[a-zA-Z]$/.test(e.key)) {
          e.preventDefault();
        }
      }
    }
  });
  useHtmlElementEventListener(getDocument(), "keyup", function(e) {
    if (active === false) {
      return;
    }
    var pressedKeysLowercase = pressedKeys.current.map(function(key) {
      return key.toLowerCase();
    });
    var match = possibleCombinations.map(function(combination) {
      return combination.map(function(key) {
        return pressedKeysLowercase.includes(key.toLowerCase());
      }).reduce(function(a, b) {
        return a && b;
      }, true);
    }).reduce(function(a, b) {
      return a || b;
    }, false);
    if (match) {
      callSoon(function() {
        return onHit(e);
      });
    }
    pressedKeys.current = pressedKeys.current.filter(function(key) {
      return key !== e.key;
    });
  });
};

// node_modules/react-complex-tree/lib/esm/tree/useViewState.js
var useViewState = function() {
  var _a;
  var treeId = useTree().treeId;
  var viewState = useTreeEnvironment().viewState;
  return (_a = viewState[treeId]) !== null && _a !== void 0 ? _a : {};
};

// node_modules/react-complex-tree/lib/esm/controlledEnvironment/useLinearItems.js
var useLinearItems = function(treeId) {
  return useTreeEnvironment().linearItems[treeId];
};

// node_modules/react-complex-tree/lib/esm/tree/useMoveFocusToIndex.js
var useMoveFocusToIndex = function() {
  var treeId = useTree().treeId;
  var _a = useTreeEnvironment(), onFocusItem = _a.onFocusItem, items = _a.items;
  var linearItems = useLinearItems(treeId);
  var viewState = useViewState();
  return useStableHandler(function(computeNewIndex) {
    var _a2;
    var currentIndex = (_a2 = linearItems.findIndex(function(item) {
      return item.item === viewState.focusedItem;
    })) !== null && _a2 !== void 0 ? _a2 : 0;
    var newIndex = computeNewIndex(currentIndex, linearItems);
    var newIndexBounded = Math.max(0, Math.min(linearItems.length - 1, newIndex));
    var newFocusItem = items[linearItems[newIndexBounded].item];
    onFocusItem === null || onFocusItem === void 0 ? void 0 : onFocusItem(newFocusItem, treeId);
    return newFocusItem;
  });
};

// node_modules/react-complex-tree/lib/esm/tree/useSelectUpTo.js
var import_react21 = __toESM(require_react());
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var usePrevious = function(value) {
  var ref = (0, import_react21.useRef)({
    target: value,
    previous: void 0
  });
  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;
};
var useSelectUpTo = function(startingAt) {
  var viewState = useViewState();
  var treeId = useTree().treeId;
  var linearItems = useLinearItems(treeId);
  var onSelectItems = useTreeEnvironment().onSelectItems;
  var focusedItemPrevious = usePrevious(viewState.focusedItem);
  return (0, import_react21.useCallback)(function(item, overrideOldSelection) {
    var _a, _b;
    if (overrideOldSelection === void 0) {
      overrideOldSelection = false;
    }
    var itemIndex = item.index;
    var selectMergedItems = function(oldSelection, newSelection) {
      var merged = __spreadArray3(__spreadArray3([], overrideOldSelection ? [] : oldSelection, true), newSelection.filter(function(i) {
        return overrideOldSelection || !oldSelection.includes(i);
      }), true);
      onSelectItems === null || onSelectItems === void 0 ? void 0 : onSelectItems(merged, treeId);
    };
    if (viewState && viewState.selectedItems && viewState.selectedItems.length > 0) {
      var lastFocus_1 = viewState.focusedItem === itemIndex ? focusedItemPrevious : viewState.focusedItem;
      var selectionStart = startingAt === "last-focus" ? linearItems.findIndex(function(linearItem) {
        return lastFocus_1 === linearItem.item;
      }) : linearItems.findIndex(function(linearItem) {
        var _a2;
        return (_a2 = viewState.selectedItems) === null || _a2 === void 0 ? void 0 : _a2.includes(linearItem.item);
      });
      var selectionEnd = linearItems.findIndex(function(linearItem) {
        return linearItem.item === itemIndex;
      });
      if (selectionStart < selectionEnd) {
        var selection = linearItems.slice(selectionStart, selectionEnd + 1).map(function(_a2) {
          var item2 = _a2.item;
          return item2;
        });
        selectMergedItems((_a = viewState.selectedItems) !== null && _a !== void 0 ? _a : [], selection);
      } else {
        var selection = linearItems.slice(selectionEnd, selectionStart + 1).map(function(_a2) {
          var item2 = _a2.item;
          return item2;
        });
        selectMergedItems((_b = viewState.selectedItems) !== null && _b !== void 0 ? _b : [], selection);
      }
    } else {
      onSelectItems === null || onSelectItems === void 0 ? void 0 : onSelectItems([itemIndex], treeId);
    }
  }, [
    viewState,
    onSelectItems,
    treeId,
    startingAt,
    linearItems,
    focusedItemPrevious
  ]);
};

// node_modules/react-complex-tree/lib/esm/tree/useTreeKeyboardBindings.js
var __spreadArray4 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var useTreeKeyboardBindings = function() {
  var _a;
  var environment = useTreeEnvironment();
  var _b = useTree(), treeId = _b.treeId, setRenamingItem = _b.setRenamingItem, setSearch = _b.setSearch, renamingItem = _b.renamingItem;
  var linearItems = useLinearItems(treeId);
  var dnd = useDragAndDrop();
  var viewState = useViewState();
  var moveFocusToIndex = useMoveFocusToIndex();
  var selectUpTo = useSelectUpTo("first-selected");
  var isActiveTree = environment.activeTreeId === treeId;
  var isRenaming = !!renamingItem;
  var disableArrowKeys = environment.disableArrowKeys;
  var enableArrowKeys = !disableArrowKeys && isActiveTree && !isRenaming;
  useKey("arrowdown", function(e) {
    e.preventDefault();
    if (dnd.isProgrammaticallyDragging) {
      dnd.programmaticDragDown();
    } else {
      var newFocusItem = moveFocusToIndex(function(currentIndex) {
        return currentIndex + 1;
      });
      if (e.shiftKey) {
        selectUpTo(newFocusItem);
      }
    }
  }, enableArrowKeys);
  useKey("arrowup", function(e) {
    e.preventDefault();
    if (dnd.isProgrammaticallyDragging) {
      dnd.programmaticDragUp();
    } else {
      var newFocusItem = moveFocusToIndex(function(currentIndex) {
        return currentIndex - 1;
      });
      if (e.shiftKey) {
        selectUpTo(newFocusItem);
      }
    }
  }, enableArrowKeys);
  useHotkey("moveFocusToFirstItem", function(e) {
    e.preventDefault();
    moveFocusToIndex(function() {
      return 0;
    });
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("moveFocusToLastItem", function(e) {
    e.preventDefault();
    moveFocusToIndex(function(currentIndex, linearItems2) {
      return linearItems2.length - 1;
    });
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useKey("arrowright", function(e) {
    e.preventDefault();
    moveFocusToIndex(function(currentIndex, linearItems2) {
      var _a2, _b2;
      var item = environment.items[linearItems2[currentIndex].item];
      if (item.isFolder) {
        if ((_a2 = viewState.expandedItems) === null || _a2 === void 0 ? void 0 : _a2.includes(item.index)) {
          return currentIndex + 1;
        }
        (_b2 = environment.onExpandItem) === null || _b2 === void 0 ? void 0 : _b2.call(environment, item, treeId);
      }
      return currentIndex;
    });
  }, enableArrowKeys && !dnd.isProgrammaticallyDragging);
  useKey("arrowleft", function(e) {
    e.preventDefault();
    moveFocusToIndex(function(currentIndex, linearItems2) {
      var _a2, _b2;
      var item = environment.items[linearItems2[currentIndex].item];
      var itemDepth = linearItems2[currentIndex].depth;
      if (item.isFolder && ((_a2 = viewState.expandedItems) === null || _a2 === void 0 ? void 0 : _a2.includes(item.index))) {
        (_b2 = environment.onCollapseItem) === null || _b2 === void 0 ? void 0 : _b2.call(environment, item, treeId);
      } else if (itemDepth > 0) {
        var parentIndex = currentIndex;
        for (parentIndex; linearItems2[parentIndex].depth !== itemDepth - 1; parentIndex -= 1)
          ;
        return parentIndex;
      }
      return currentIndex;
    });
  }, enableArrowKeys && !dnd.isProgrammaticallyDragging);
  useHotkey("primaryAction", function(e) {
    var _a2, _b2;
    e.preventDefault();
    if (viewState.focusedItem !== void 0) {
      (_a2 = environment.onSelectItems) === null || _a2 === void 0 ? void 0 : _a2.call(environment, [viewState.focusedItem], treeId);
      (_b2 = environment.onPrimaryAction) === null || _b2 === void 0 ? void 0 : _b2.call(environment, environment.items[viewState.focusedItem], treeId);
    }
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("toggleSelectItem", function(e) {
    var _a2, _b2, _c;
    e.preventDefault();
    if (viewState.focusedItem !== void 0) {
      if (viewState.selectedItems && viewState.selectedItems.includes(viewState.focusedItem)) {
        (_a2 = environment.onSelectItems) === null || _a2 === void 0 ? void 0 : _a2.call(environment, viewState.selectedItems.filter(function(item) {
          return item !== viewState.focusedItem;
        }), treeId);
      } else {
        (_b2 = environment.onSelectItems) === null || _b2 === void 0 ? void 0 : _b2.call(environment, __spreadArray4(__spreadArray4([], (_c = viewState.selectedItems) !== null && _c !== void 0 ? _c : [], true), [viewState.focusedItem], false), treeId);
      }
    }
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("selectAll", function(e) {
    var _a2;
    e.preventDefault();
    (_a2 = environment.onSelectItems) === null || _a2 === void 0 ? void 0 : _a2.call(environment, linearItems.map(function(_a3) {
      var item = _a3.item;
      return item;
    }), treeId);
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("renameItem", function(e) {
    var _a2;
    if (viewState.focusedItem === void 0) {
      return;
    }
    e.preventDefault();
    var item = environment.items[viewState.focusedItem];
    if (item.canRename === false) {
      return;
    }
    (_a2 = environment.onStartRenamingItem) === null || _a2 === void 0 ? void 0 : _a2.call(environment, item, treeId);
    setRenamingItem(item.index);
  }, isActiveTree && ((_a = environment.canRename) !== null && _a !== void 0 ? _a : true) && !isRenaming);
  useHotkey("startSearch", function(e) {
    var _a2, _b2;
    e.preventDefault();
    setSearch("");
    (_b2 = (_a2 = document.querySelector('[data-rct-search-input="true"]')) === null || _a2 === void 0 ? void 0 : _a2.focus) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
  }, isActiveTree && !dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("startProgrammaticDnd", function(e) {
    e.preventDefault();
    dnd.startProgrammaticDrag();
  }, isActiveTree && !isRenaming);
  useHotkey("completeProgrammaticDnd", function(e) {
    e.preventDefault();
    dnd.completeProgrammaticDrag();
  }, isActiveTree && dnd.isProgrammaticallyDragging && !isRenaming);
  useHotkey("abortProgrammaticDnd", function(e) {
    e.preventDefault();
    dnd.abortProgrammaticDrag();
  }, isActiveTree && dnd.isProgrammaticallyDragging && !isRenaming);
};

// node_modules/react-complex-tree/lib/esm/search/defaultMatcher.js
var defaultMatcher = function(search, item, itemTitle) {
  return itemTitle.toLowerCase().includes(search.toLowerCase());
};

// node_modules/react-complex-tree/lib/esm/search/useSearchMatchFocus.js
var useSearchMatchFocus = function() {
  var _a = useTreeEnvironment(), doesSearchMatchItem = _a.doesSearchMatchItem, items = _a.items, getItemTitle = _a.getItemTitle, onFocusItem = _a.onFocusItem;
  var _b = useTree(), search = _b.search, treeId = _b.treeId;
  var linearItems = useLinearItems(treeId);
  var callSoon = useCallSoon();
  useSideEffect(function() {
    if (search && search.length > 0) {
      callSoon(function() {
        var focusItem = linearItems.find(function(_a2) {
          var item = _a2.item;
          return (doesSearchMatchItem !== null && doesSearchMatchItem !== void 0 ? doesSearchMatchItem : defaultMatcher)(search, items[item], getItemTitle(items[item]));
        });
        if (focusItem) {
          onFocusItem === null || onFocusItem === void 0 ? void 0 : onFocusItem(items[focusItem.item], treeId);
        }
      });
    }
  }, [
    doesSearchMatchItem,
    getItemTitle,
    linearItems,
    items,
    onFocusItem,
    search,
    treeId,
    callSoon
  ], [search]);
};

// node_modules/react-complex-tree/lib/esm/search/SearchInput.js
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var SearchInput = function(_a) {
  var _b;
  var containerRef = _a.containerRef;
  var _c = useTree(), search = _c.search, setSearch = _c.setSearch, treeId = _c.treeId, renderers = _c.renderers, renamingItem = _c.renamingItem;
  var environment = useTreeEnvironment();
  useViewState();
  var isActiveTree = environment.activeTreeId === treeId;
  var callSoon = useCallSoon();
  useSearchMatchFocus();
  var clearSearch = function() {
    var _a2, _b2, _c2;
    setSearch(null);
    if ((_a2 = environment.autoFocus) !== null && _a2 !== void 0 ? _a2 : true) {
      var focusItem = (_b2 = getDocument()) === null || _b2 === void 0 ? void 0 : _b2.querySelector('[data-rct-tree="'.concat(treeId, '"] [data-rct-item-focus="true"]'));
      (_c2 = focusItem === null || focusItem === void 0 ? void 0 : focusItem.focus) === null || _c2 === void 0 ? void 0 : _c2.call(focusItem);
    }
  };
  useHotkey("abortSearch", function() {
    callSoon(function() {
      clearSearch();
    });
  }, isActiveTree && search !== null, true);
  useHtmlElementEventListener(containerRef, "keydown", function(e) {
    var _a2, _b2;
    var unicode = e.key.charCodeAt(0);
    if (((_a2 = environment.canSearch) !== null && _a2 !== void 0 ? _a2 : true) && ((_b2 = environment.canSearchByStartingTyping) !== null && _b2 !== void 0 ? _b2 : true) && isActiveTree && search === null && !renamingItem && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && (unicode >= 48 && unicode <= 57 || // number
    // (unicode >= 65 && unicode <= 90) || // uppercase letter
    unicode >= 97 && unicode <= 122)) {
      setSearch("");
    }
  });
  if (!((_b = environment.canSearch) !== null && _b !== void 0 ? _b : true) || search === null) {
    return null;
  }
  return renderers.renderSearchInput({
    inputProps: __assign8({ value: search, onChange: function(e) {
      return setSearch(e.target.value);
    }, onBlur: function() {
      clearSearch();
    }, ref: function(el) {
      var _a2;
      (_a2 = el === null || el === void 0 ? void 0 : el.focus) === null || _a2 === void 0 ? void 0 : _a2.call(el);
    }, "aria-label": "Search for items" }, {
      "data-rct-search-input": "true"
    })
  });
};

// node_modules/react-complex-tree/lib/esm/tree/MaybeLiveDescription.js
var React8 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/tree/LiveDescription.js
var React7 = __toESM(require_react());
var import_react22 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/tree/defaultLiveDescriptors.js
var defaultLiveDescriptors = {
  introduction: "\n    <p>Accessibility guide for tree {treeLabel}.</p>\n    <p>\n      Navigate the tree with the arrow keys. Common tree hotkeys apply. Further keybindings are available:\n    </p>\n    <ul>\n      <li>{keybinding:primaryAction} to execute primary action on focused item</li>\n      <li>{keybinding:renameItem} to start renaming the focused item</li>\n      <li>{keybinding:abortRenameItem} to abort renaming an item</li>\n      <li>{keybinding:startProgrammaticDnd} to start dragging selected items</li>\n    </ul>\n  ",
  renamingItem: "\n    <p>Renaming the item {renamingItem}.</p>\n    <p>Use the keybinding {keybinding:abortRenameItem} to abort renaming.</p>\n  ",
  searching: "\n    <p>Searching</p>\n  ",
  programmaticallyDragging: "\n    <p>Dragging items {dragItems}.</p>\n    <p>Press the arrow keys to move the drag target.</p>\n    <p>Press {keybinding:completeProgrammaticDnd} to drop or {keybinding:abortProgrammaticDnd} to abort.</p>\n  ",
  programmaticallyDraggingTarget: "\n    <p>Drop target is {dropTarget}.</p>\n  "
};

// node_modules/react-complex-tree/lib/esm/tree/resolveLiveDescriptor.js
var resolveLiveDescriptor = function(descriptor, environment, dnd, tree, keyboardBindings) {
  var getItemTitle = function(index) {
    return environment.getItemTitle(environment.items[index]);
  };
  return descriptor.replace(/({[^\s}]+)}/g, function(variableNameWithBrackets) {
    var _a, _b, _c;
    var variableName = variableNameWithBrackets.slice(1, -1);
    switch (variableName) {
      case "treeLabel":
        return (_a = tree.treeLabel) !== null && _a !== void 0 ? _a : "";
      case "renamingItem":
        return tree.renamingItem ? getItemTitle(tree.renamingItem) : "None";
      case "dragItems":
        return (_c = (_b = dnd.draggingItems) === null || _b === void 0 ? void 0 : _b.map(function(item) {
          return environment.getItemTitle(item);
        }).join(", ")) !== null && _c !== void 0 ? _c : "None";
      case "dropTarget": {
        if (!dnd.draggingPosition) {
          return "None";
        }
        if (dnd.draggingPosition.targetType === "item" || dnd.draggingPosition.targetType === "root") {
          return "within ".concat(getItemTitle(dnd.draggingPosition.targetItem));
        }
        var parentItem = environment.items[dnd.draggingPosition.parentItem];
        var parentTitle = environment.getItemTitle(parentItem);
        if (dnd.draggingPosition.childIndex === 0) {
          return "within ".concat(parentTitle, " at the start");
        }
        return "within ".concat(parentTitle, " after ").concat(getItemTitle(parentItem.children[dnd.draggingPosition.childIndex - 1]));
      }
      default:
        if (variableName.startsWith("keybinding:")) {
          return keyboardBindings[variableName.slice(11)][0];
        }
        throw Error("Unknown live descriptor variable {".concat(variableName, "}"));
    }
  });
};

// node_modules/react-complex-tree/lib/esm/tree/LiveDescription.js
var LiveWrapper = function(_a) {
  var children = _a.children, live = _a.live;
  return React7.createElement("div", { "aria-live": live, dangerouslySetInnerHTML: { __html: children } });
};
var LiveDescription = function() {
  var env = useTreeEnvironment();
  var tree = useTree();
  var dnd = useDragAndDrop();
  var keys = useKeyboardBindings();
  var descriptors = (0, import_react22.useMemo)(function() {
    var _a;
    return (_a = env.liveDescriptors) !== null && _a !== void 0 ? _a : defaultLiveDescriptors;
  }, [env.liveDescriptors]);
  var MainWrapper = tree.renderers.renderLiveDescriptorContainer;
  if (tree.treeInformation.isRenaming) {
    return React7.createElement(
      MainWrapper,
      { tree },
      React7.createElement(LiveWrapper, { live: "polite" }, resolveLiveDescriptor(descriptors.renamingItem, env, dnd, tree, keys))
    );
  }
  if (tree.treeInformation.isSearching) {
    return React7.createElement(
      MainWrapper,
      { tree },
      React7.createElement(LiveWrapper, { live: "polite" }, resolveLiveDescriptor(descriptors.searching, env, dnd, tree, keys))
    );
  }
  if (tree.treeInformation.isProgrammaticallyDragging) {
    return React7.createElement(
      MainWrapper,
      { tree },
      React7.createElement(LiveWrapper, { live: "polite" }, resolveLiveDescriptor(descriptors.programmaticallyDragging, env, dnd, tree, keys)),
      React7.createElement(LiveWrapper, { live: "assertive" }, resolveLiveDescriptor(descriptors.programmaticallyDraggingTarget, env, dnd, tree, keys))
    );
  }
  return React7.createElement(
    MainWrapper,
    { tree },
    React7.createElement(LiveWrapper, { live: "off" }, resolveLiveDescriptor(descriptors.introduction, env, dnd, tree, keys))
  );
};

// node_modules/react-complex-tree/lib/esm/tree/MaybeLiveDescription.js
var MaybeLiveDescription = function() {
  var _a;
  var env = useTreeEnvironment();
  if (!((_a = env.showLiveDescription) !== null && _a !== void 0 ? _a : true)) {
    return null;
  }
  return React8.createElement(LiveDescription, null);
};

// node_modules/react-complex-tree/lib/esm/tree/TreeManager.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var TreeManager = function() {
  var _a = useTree(), treeId = _a.treeId, rootItem = _a.rootItem, renderers = _a.renderers, treeInformation = _a.treeInformation;
  var environment = useTreeEnvironment();
  var containerRef = (0, import_react23.useRef)();
  var dnd = useDragAndDrop();
  useTreeKeyboardBindings();
  useFocusWithin(containerRef.current, function() {
    environment.setActiveTree(treeId);
  }, function() {
    environment.setActiveTree(function(oldTreeId) {
      return oldTreeId === treeId ? void 0 : oldTreeId;
    });
  });
  var rootChildren = environment.items[rootItem].children;
  var treeChildren = React9.createElement(
    React9.Fragment,
    null,
    React9.createElement(MaybeLiveDescription, null),
    React9.createElement(TreeItemChildren, { depth: 0, parentId: rootItem }, rootChildren !== null && rootChildren !== void 0 ? rootChildren : []),
    React9.createElement(DragBetweenLine, { treeId }),
    React9.createElement(SearchInput, { containerRef: containerRef.current })
  );
  var containerProps = __assign9({ onDragOver: function(e) {
    e.preventDefault();
    dnd.onDragOverTreeHandler(e, treeId, containerRef);
  }, onDragLeave: function(e) {
    dnd.onDragLeaveContainerHandler(e, containerRef);
  }, onMouseDown: function() {
    return dnd.abortProgrammaticDrag();
  }, ref: containerRef, style: { position: "relative" }, role: "tree", "aria-label": !treeInformation.treeLabelledBy ? treeInformation.treeLabel : void 0, "aria-labelledby": treeInformation.treeLabelledBy }, {
    "data-rct-tree": treeId
  });
  return renderers.renderTreeContainer({
    children: treeChildren,
    info: treeInformation,
    containerProps
  });
};

// node_modules/react-complex-tree/lib/esm/tree/useCreatedTreeInformation.js
var import_react24 = __toESM(require_react());
var useCreatedTreeInformation = function(tree, renamingItem, search) {
  var _a;
  var environment = useTreeEnvironment();
  var dnd = useDragAndDrop();
  var selectedItems = (_a = environment.viewState[tree.treeId]) === null || _a === void 0 ? void 0 : _a.selectedItems;
  return (0, import_react24.useMemo)(function() {
    var _a2, _b;
    return {
      isFocused: environment.activeTreeId === tree.treeId,
      isRenaming: !!renamingItem,
      areItemsSelected: ((_a2 = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) !== null && _a2 !== void 0 ? _a2 : 0) > 0,
      isSearching: search !== null,
      search,
      isProgrammaticallyDragging: (_b = dnd.isProgrammaticallyDragging) !== null && _b !== void 0 ? _b : false,
      treeId: tree.treeId,
      rootItem: tree.rootItem,
      treeLabel: tree.treeLabel,
      treeLabelledBy: tree.treeLabelledBy
    };
  }, [
    environment.activeTreeId,
    tree.treeId,
    tree.rootItem,
    tree.treeLabel,
    tree.treeLabelledBy,
    renamingItem,
    selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length,
    search,
    dnd.isProgrammaticallyDragging
  ]);
};

// node_modules/react-complex-tree/lib/esm/treeActions/TreeActionsProvider.js
var React10 = __toESM(require_react());
var import_react26 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/treeActions/useCreatedTreeRef.js
var import_react25 = __toESM(require_react());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var useCreatedTreeRef = function(ref, actions) {
  var environment = useTreeEnvironment();
  var tree = useTree();
  var dnd = useDragAndDrop();
  (0, import_react25.useImperativeHandle)(ref, function() {
    return __assign10(__assign10(__assign10({}, actions), { treeEnvironmentContext: environment, dragAndDropContext: dnd, treeContext: tree }), tree.treeInformation);
  });
};

// node_modules/react-complex-tree/lib/esm/treeActions/TreeActionsProvider.js
var EnvironmentActionsContext2 = React10.createContext(null);
var TreeActionsProvider = React10.forwardRef(function(props, ref) {
  useTreeEnvironment();
  var tree = useTree();
  useDragAndDrop();
  var envActions = useEnvironmentActions();
  var actions = (0, import_react26.useMemo)(function() {
    return {
      abortRenamingItem: function() {
        tree.setRenamingItem(null);
      },
      abortSearch: function() {
        tree.setSearch(null);
      },
      collapseItem: function(itemId) {
        envActions.collapseItem(itemId, tree.treeId);
      },
      completeRenamingItem: function() {
      },
      expandItem: function(itemId) {
        envActions.expandItem(itemId, tree.treeId);
      },
      focusItem: function(itemId, setDomFocus) {
        if (setDomFocus === void 0) {
          setDomFocus = true;
        }
        envActions.focusItem(itemId, tree.treeId, setDomFocus);
      },
      focusTree: function(autoFocus) {
        if (autoFocus === void 0) {
          autoFocus = true;
        }
        envActions.focusTree(tree.treeId, autoFocus);
      },
      invokePrimaryAction: function(itemId) {
        envActions.invokePrimaryAction(itemId, tree.treeId);
      },
      moveFocusDown: function() {
        envActions.moveFocusDown(tree.treeId);
      },
      moveFocusUp: function() {
        envActions.moveFocusUp(tree.treeId);
      },
      renameItem: function(itemId, name) {
        envActions.renameItem(itemId, name, tree.treeId);
      },
      selectItems: function(itemsIds) {
        envActions.selectItems(itemsIds, tree.treeId);
      },
      setSearch: function(search) {
        tree.setSearch(search);
      },
      startRenamingItem: function(itemId) {
        tree.setRenamingItem(itemId);
      },
      stopRenamingItem: function() {
        tree.setRenamingItem(null);
      },
      toggleItemExpandedState: function(itemId) {
        envActions.toggleItemExpandedState(itemId, tree.treeId);
      },
      toggleItemSelectStatus: function(itemId) {
        envActions.toggleItemSelectStatus(itemId, tree.treeId);
      },
      expandAll: function() {
        envActions.expandAll(tree.treeId);
      },
      collapseAll: function() {
        envActions.collapseAll(tree.treeId);
      },
      expandSubsequently: function(itemIds) {
        return envActions.expandSubsequently(tree.treeId, itemIds);
      }
    };
  }, [envActions, tree]);
  useCreatedTreeRef(ref, actions);
  return React10.createElement(EnvironmentActionsContext2.Provider, { value: actions }, props.children);
});

// node_modules/react-complex-tree/lib/esm/tree/Tree.js
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var TreeContext = React11.createContext(null);
var useTree = function() {
  return (0, import_react27.useContext)(TreeContext);
};
var Tree = React11.forwardRef(function(props, ref) {
  var _a;
  var environment = useTreeEnvironment();
  var renderers = (0, import_react27.useMemo)(function() {
    return __assign11(__assign11({}, environment), props);
  }, [props, environment]);
  var _b = (0, import_react27.useState)(null), search = _b[0], setSearch = _b[1];
  var _c = (0, import_react27.useState)(null), renamingItem = _c[0], setRenamingItem = _c[1];
  var rootItem = environment.items[props.rootItem];
  var viewState = environment.viewState[props.treeId];
  (0, import_react27.useEffect)(function() {
    environment.registerTree({
      treeId: props.treeId,
      rootItem: props.rootItem
    });
    return function() {
      return environment.unregisterTree(props.treeId);
    };
  }, [props.treeId, props.rootItem]);
  var treeInformation = useCreatedTreeInformation(props, renamingItem, search);
  var treeContextProps = (0, import_react27.useMemo)(function() {
    return {
      treeId: props.treeId,
      rootItem: props.rootItem,
      treeLabel: props.treeLabel,
      treeLabelledBy: props.treeLabelledBy,
      getItemsLinearly: function() {
        return getItemsLinearly(props.rootItem, viewState !== null && viewState !== void 0 ? viewState : {}, environment.items);
      },
      treeInformation,
      search,
      setSearch,
      renamingItem,
      setRenamingItem,
      renderers
    };
  }, [
    environment.items,
    props.rootItem,
    props.treeId,
    props.treeLabel,
    props.treeLabelledBy,
    renamingItem,
    renderers,
    search,
    treeInformation,
    viewState
  ]);
  if (rootItem === void 0) {
    (_a = environment.onMissingItems) === null || _a === void 0 ? void 0 : _a.call(environment, [props.rootItem]);
    return null;
  }
  return React11.createElement(
    TreeContext.Provider,
    { value: treeContextProps },
    React11.createElement(
      TreeActionsProvider,
      { ref },
      React11.createElement(TreeManager, null)
    )
  );
});

// node_modules/react-complex-tree/lib/esm/treeItem/TreeItemChildren.js
var TreeItemChildren = function(props) {
  var _a = useTree(), renderers = _a.renderers, treeInformation = _a.treeInformation;
  var childElements = [];
  for (var _i = 0, _b = props.children; _i < _b.length; _i++) {
    var child = _b[_i];
    childElements.push(import_react28.default.createElement(TreeItemElement, { key: child, itemIndex: child, depth: props.depth }));
  }
  if (childElements.length === 0) {
    return null;
  }
  var containerProps = {
    role: props.depth !== 0 ? "group" : void 0
  };
  return renderers.renderItemsContainer({
    children: childElements,
    info: treeInformation,
    containerProps,
    depth: props.depth,
    parentId: props.parentId
  });
};

// node_modules/react-complex-tree/lib/esm/treeItem/useTreeItemRenderContext.js
var import_react29 = __toESM(require_react());
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var __spreadArray5 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var useTreeItemRenderContext = function(item) {
  var _a, _b, _c, _d;
  var _e = useTree(), treeId = _e.treeId, search = _e.search, renamingItem = _e.renamingItem, setRenamingItem = _e.setRenamingItem;
  var environment = useTreeEnvironment();
  var interactionManager = useInteractionManager();
  var dnd = useDragAndDrop();
  var selectUpTo = useSelectUpTo("last-focus");
  var itemTitle = item && environment.getItemTitle(item);
  var getOriginalItemOrder = useGetOriginalItemOrder();
  var isSearchMatching = (0, import_react29.useMemo)(function() {
    var _a2;
    return search === null || search.length === 0 || !item || !itemTitle ? false : ((_a2 = environment.doesSearchMatchItem) !== null && _a2 !== void 0 ? _a2 : defaultMatcher)(search, item, itemTitle);
  }, [search, item, itemTitle, environment.doesSearchMatchItem]);
  var isSelected = item && ((_b = (_a = environment.viewState[treeId]) === null || _a === void 0 ? void 0 : _a.selectedItems) === null || _b === void 0 ? void 0 : _b.includes(item.index));
  var isExpanded = item && ((_d = (_c = environment.viewState[treeId]) === null || _c === void 0 ? void 0 : _c.expandedItems) === null || _d === void 0 ? void 0 : _d.includes(item.index));
  var isRenaming = item && renamingItem === item.index;
  return (0, import_react29.useMemo)(function() {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _j;
    if (!item) {
      return void 0;
    }
    var viewState = environment.viewState[treeId];
    var currentlySelectedItems = ((_b2 = (_a2 = viewState === null || viewState === void 0 ? void 0 : viewState.selectedItems) === null || _a2 === void 0 ? void 0 : _a2.map(function(item2) {
      return environment.items[item2];
    })) !== null && _b2 !== void 0 ? _b2 : (viewState === null || viewState === void 0 ? void 0 : viewState.focusedItem) ? [environment.items[viewState === null || viewState === void 0 ? void 0 : viewState.focusedItem]] : []).filter(function(item2) {
      return !!item2;
    });
    var isItemPartOfSelectedItems = !!currentlySelectedItems.find(function(selectedItem) {
      return selectedItem.index === item.index;
    });
    var canDragCurrentlySelectedItems = currentlySelectedItems && ((_d2 = (_c2 = environment.canDrag) === null || _c2 === void 0 ? void 0 : _c2.call(environment, currentlySelectedItems)) !== null && _d2 !== void 0 ? _d2 : true) && currentlySelectedItems.map(function(item2) {
      var _a3;
      return (_a3 = item2.canMove) !== null && _a3 !== void 0 ? _a3 : true;
    }).reduce(function(a, b) {
      return a && b;
    }, true);
    var canDragThisItem = ((_f = (_e2 = environment.canDrag) === null || _e2 === void 0 ? void 0 : _e2.call(environment, [item])) !== null && _f !== void 0 ? _f : true) && ((_g = item.canMove) !== null && _g !== void 0 ? _g : true);
    var canDrag = environment.canDragAndDrop && (isItemPartOfSelectedItems && canDragCurrentlySelectedItems || !isItemPartOfSelectedItems && canDragThisItem);
    var canDropOn = environment.canDragAndDrop && !!((_j = (_h = dnd.viableDragPositions) === null || _h === void 0 ? void 0 : _h[treeId]) === null || _j === void 0 ? void 0 : _j.find(function(position) {
      return position.targetType === "item" && position.targetItem === item.index;
    }));
    var actions = {
      // TODO disable most actions during rename
      primaryAction: function() {
        var _a3;
        (_a3 = environment.onPrimaryAction) === null || _a3 === void 0 ? void 0 : _a3.call(environment, environment.items[item.index], treeId);
      },
      collapseItem: function() {
        var _a3;
        (_a3 = environment.onCollapseItem) === null || _a3 === void 0 ? void 0 : _a3.call(environment, item, treeId);
      },
      expandItem: function() {
        var _a3;
        (_a3 = environment.onExpandItem) === null || _a3 === void 0 ? void 0 : _a3.call(environment, item, treeId);
      },
      toggleExpandedState: function() {
        var _a3, _b3;
        if (isExpanded) {
          (_a3 = environment.onCollapseItem) === null || _a3 === void 0 ? void 0 : _a3.call(environment, item, treeId);
        } else {
          (_b3 = environment.onExpandItem) === null || _b3 === void 0 ? void 0 : _b3.call(environment, item, treeId);
        }
      },
      selectItem: function() {
        var _a3;
        (_a3 = environment.onSelectItems) === null || _a3 === void 0 ? void 0 : _a3.call(environment, [item.index], treeId);
      },
      addToSelectedItems: function() {
        var _a3, _b3;
        (_a3 = environment.onSelectItems) === null || _a3 === void 0 ? void 0 : _a3.call(environment, __spreadArray5(__spreadArray5([], (_b3 = viewState === null || viewState === void 0 ? void 0 : viewState.selectedItems) !== null && _b3 !== void 0 ? _b3 : [], true), [item.index], false), treeId);
      },
      unselectItem: function() {
        var _a3, _b3, _c3;
        (_a3 = environment.onSelectItems) === null || _a3 === void 0 ? void 0 : _a3.call(environment, (_c3 = (_b3 = viewState === null || viewState === void 0 ? void 0 : viewState.selectedItems) === null || _b3 === void 0 ? void 0 : _b3.filter(function(id) {
          return id !== item.index;
        })) !== null && _c3 !== void 0 ? _c3 : [], treeId);
      },
      selectUpTo: function(overrideOldSelection) {
        selectUpTo(item, overrideOldSelection);
      },
      startRenamingItem: function() {
        setRenamingItem(item.index);
      },
      stopRenamingItem: function() {
        setRenamingItem(null);
      },
      focusItem: function(setDomFocus) {
        var _a3;
        if (setDomFocus === void 0) {
          setDomFocus = true;
        }
        (_a3 = environment.onFocusItem) === null || _a3 === void 0 ? void 0 : _a3.call(environment, item, treeId, setDomFocus);
      },
      startDragging: function() {
        var _a3, _b3;
        var selectedItems = (_a3 = viewState === null || viewState === void 0 ? void 0 : viewState.selectedItems) !== null && _a3 !== void 0 ? _a3 : [];
        if (!selectedItems.includes(item.index)) {
          selectedItems = [item.index];
          (_b3 = environment.onSelectItems) === null || _b3 === void 0 ? void 0 : _b3.call(environment, selectedItems, treeId);
        }
        if (canDrag) {
          var orderedItems = getOriginalItemOrder(treeId, selectedItems.map(function(id) {
            return environment.items[id];
          }));
          dnd.onStartDraggingItems(orderedItems, treeId);
        }
      }
    };
    var renderFlags = {
      isSelected,
      isExpanded,
      isFocused: (viewState === null || viewState === void 0 ? void 0 : viewState.focusedItem) === item.index,
      isRenaming,
      isDraggingOver: dnd.draggingPosition && dnd.draggingPosition.targetType === "item" && dnd.draggingPosition.targetItem === item.index && dnd.draggingPosition.treeId === treeId,
      isDraggingOverParent: false,
      isSearchMatching,
      canDrag,
      canDropOn
    };
    var interactiveElementProps = __assign12(__assign12({}, interactionManager.createInteractiveElementProps(item, treeId, actions, renderFlags, viewState)), {
      "data-rct-item-interactive": true,
      "data-rct-item-focus": renderFlags.isFocused ? "true" : "false",
      "data-rct-item-id": item.index
    });
    var itemContainerWithoutChildrenProps = __assign12({}, {
      "data-rct-item-container": "true"
    });
    var itemContainerWithChildrenProps = {
      role: "treeitem",
      "aria-selected": renderFlags.isSelected,
      "aria-expanded": item.isFolder ? renderFlags.isExpanded ? "true" : "false" : void 0
    };
    var arrowProps = {
      onClick: function() {
        if (item.isFolder) {
          actions.toggleExpandedState();
        }
        actions.selectItem();
      },
      onFocus: function() {
        actions.focusItem();
      },
      onDragOver: function(e) {
        e.preventDefault();
      },
      "aria-hidden": true,
      tabIndex: -1
    };
    var viewStateFlags = !viewState ? {} : Object.entries(viewState).reduce(function(acc, _a3) {
      var key = _a3[0], value = _a3[1];
      acc[key] = Array.isArray(value) ? value.includes(item.index) : value === item.index;
      return acc;
    }, {});
    return __assign12(__assign12(__assign12({}, actions), renderFlags), { interactiveElementProps, itemContainerWithChildrenProps, itemContainerWithoutChildrenProps, arrowProps, viewStateFlags });
  }, [
    item,
    environment,
    treeId,
    dnd,
    isSelected,
    isExpanded,
    isRenaming,
    isSearchMatching,
    interactionManager,
    selectUpTo,
    setRenamingItem,
    getOriginalItemOrder
  ]);
};

// node_modules/react-complex-tree/lib/esm/treeItem/TreeItemRenamingInput.js
var import_react30 = __toESM(require_react());
var TreeItemRenamingInput = function(props) {
  var _a = useTree(), renderers = _a.renderers, treeInformation = _a.treeInformation, setRenamingItem = _a.setRenamingItem, treeId = _a.treeId;
  var environment = useTreeEnvironment();
  var inputRef = (0, import_react30.useRef)(null);
  var submitButtonRef = (0, import_react30.useRef)(null);
  var item = environment.items[props.itemIndex];
  var _b = (0, import_react30.useState)(environment.getItemTitle(item)), title = _b[0], setTitle = _b[1];
  var callSoon = useCallSoon(true);
  var abort = function() {
    var _a2;
    (_a2 = environment.onAbortRenamingItem) === null || _a2 === void 0 ? void 0 : _a2.call(environment, item, treeInformation.treeId);
    setRenamingItem(null);
    callSoon(function() {
      environment.setActiveTree(treeId);
    });
  };
  var confirm = function() {
    var _a2;
    (_a2 = environment.onRenameItem) === null || _a2 === void 0 ? void 0 : _a2.call(environment, item, title, treeInformation.treeId);
    setRenamingItem(null);
    callSoon(function() {
      environment.setActiveTree(treeId);
    });
  };
  useSideEffect(function() {
    var _a2, _b2, _c, _d;
    environment.setActiveTree(treeId);
    if ((_a2 = environment.autoFocus) !== null && _a2 !== void 0 ? _a2 : true) {
      (_b2 = inputRef.current) === null || _b2 === void 0 ? void 0 : _b2.select();
      (_d = (_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
  }, [environment, treeId], []);
  useHotkey("abortRenameItem", function() {
    abort();
  }, true, true);
  var inputProps = {
    value: title,
    onChange: function(e) {
      setTitle(e.target.value);
    },
    onBlur: function(e) {
      if (!e.relatedTarget || e.relatedTarget !== submitButtonRef.current) {
        abort();
      }
    },
    "aria-label": "New item name",
    tabIndex: 0
  };
  var submitButtonProps = {
    onClick: function(e) {
      e.stopPropagation();
      confirm();
    }
  };
  var formProps = {
    onSubmit: function(e) {
      e.preventDefault();
      confirm();
    }
  };
  return renderers.renderRenameInput({
    item,
    inputRef,
    submitButtonProps,
    submitButtonRef,
    formProps,
    inputProps
  });
};

// node_modules/react-complex-tree/lib/esm/treeItem/TreeItemElement.js
var TreeItemElement = function(props) {
  var _a, _b, _c, _d;
  var _e = (0, import_react31.useState)(false), hasBeenRequested = _e[0], setHasBeenRequested = _e[1];
  var _f = useTree(), renderers = _f.renderers, treeInformation = _f.treeInformation, renamingItem = _f.renamingItem;
  var environment = useTreeEnvironment();
  var viewState = useViewState();
  var item = environment.items[props.itemIndex];
  var isExpanded = (0, import_react31.useMemo)(function() {
    var _a2;
    return (_a2 = viewState.expandedItems) === null || _a2 === void 0 ? void 0 : _a2.includes(props.itemIndex);
  }, [props.itemIndex, viewState.expandedItems]);
  var renderContext = useTreeItemRenderContext(item);
  if (item === void 0 || renderContext === void 0) {
    if (!hasBeenRequested) {
      setHasBeenRequested(true);
      (_a = environment.onMissingItems) === null || _a === void 0 ? void 0 : _a.call(environment, [props.itemIndex]);
    }
    return null;
  }
  var shouldRenderChildren = (_c = (_b = environment.shouldRenderChildren) === null || _b === void 0 ? void 0 : _b.call(environment, item, renderContext)) !== null && _c !== void 0 ? _c : item.isFolder && isExpanded;
  var children = item.children && shouldRenderChildren && import_react31.default.createElement(TreeItemChildren, { depth: props.depth + 1, parentId: props.itemIndex }, item.children);
  var title = environment.getItemTitle(item);
  var titleComponent = renamingItem === props.itemIndex ? import_react31.default.createElement(TreeItemRenamingInput, { itemIndex: props.itemIndex }) : renderers.renderItemTitle({
    info: treeInformation,
    context: renderContext,
    title,
    item
  });
  var arrowComponent = renderers.renderItemArrow({
    info: treeInformation,
    context: renderContext,
    item: environment.items[props.itemIndex]
  });
  return (_d = renderers.renderItem({
    item: environment.items[props.itemIndex],
    depth: props.depth,
    title: titleComponent,
    arrow: arrowComponent,
    context: renderContext,
    info: treeInformation,
    children
  })) !== null && _d !== void 0 ? _d : null;
};

// node_modules/react-complex-tree/lib/esm/uncontrolledEnvironment/UncontrolledTreeEnvironment.js
var React14 = __toESM(require_react());
var import_react33 = __toESM(require_react());

// node_modules/react-complex-tree/lib/esm/uncontrolledEnvironment/CompleteTreeDataProvider.js
var __awaiter2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator2 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var CompleteTreeDataProvider = (
  /** @class */
  function() {
    function CompleteTreeDataProvider2(provider) {
      this.provider = provider;
    }
    CompleteTreeDataProvider2.prototype.getTreeItem = function(itemId) {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          return [2, this.provider.getTreeItem(itemId)];
        });
      });
    };
    CompleteTreeDataProvider2.prototype.getTreeItems = function(itemIds) {
      return __awaiter2(this, void 0, void 0, function() {
        var _this = this;
        return __generator2(this, function(_a) {
          return [2, this.provider.getTreeItems ? this.provider.getTreeItems(itemIds) : Promise.all(itemIds.map(function(id) {
            return _this.provider.getTreeItem(id);
          }))];
        });
      });
    };
    CompleteTreeDataProvider2.prototype.onChangeItemChildren = function(itemId, newChildren) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_c) {
          return [2, (_b = (_a = this.provider).onChangeItemChildren) === null || _b === void 0 ? void 0 : _b.call(_a, itemId, newChildren)];
        });
      });
    };
    CompleteTreeDataProvider2.prototype.onDidChangeTreeData = function(listener) {
      return this.provider.onDidChangeTreeData ? this.provider.onDidChangeTreeData(listener) : { dispose: function() {
      } };
    };
    CompleteTreeDataProvider2.prototype.onRenameItem = function(item, name) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_c) {
          return [2, (_b = (_a = this.provider).onRenameItem) === null || _b === void 0 ? void 0 : _b.call(_a, item, name)];
        });
      });
    };
    return CompleteTreeDataProvider2;
  }()
);

// node_modules/react-complex-tree/lib/esm/useIsMounted.js
var import_react32 = __toESM(require_react());
var useIsMounted = function() {
  var mountedRef = (0, import_react32.useRef)(false);
  (0, import_react32.useEffect)(function() {
    mountedRef.current = true;
    return function() {
      mountedRef.current = false;
    };
  }, []);
  return mountedRef;
};

// node_modules/react-complex-tree/lib/esm/uncontrolledEnvironment/UncontrolledTreeEnvironment.js
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __awaiter3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator3 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray6 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var UncontrolledTreeEnvironment = React14.forwardRef(function(props, ref) {
  var _a = (0, import_react33.useState)({}), currentItems = _a[0], setCurrentItems = _a[1];
  var _b = (0, import_react33.useState)(props.viewState), viewState = _b[0], setViewState = _b[1];
  var viewStateRef = useRefCopy(viewState);
  var missingItemIds = (0, import_react33.useRef)([]);
  var dataProvider = (0, import_react33.useMemo)(function() {
    return new CompleteTreeDataProvider(props.dataProvider);
  }, [props.dataProvider]);
  var isMounted = useIsMounted();
  var writeItems = (0, import_react33.useCallback)(function(newItems) {
    if (!isMounted.current)
      return;
    setCurrentItems(function(oldItems) {
      return __assign13(__assign13({}, oldItems), newItems);
    });
  }, [isMounted]);
  var amendViewState = (0, import_react33.useCallback)(function(treeId, constructNewState) {
    setViewState(function(oldState) {
      var _a2;
      var _b2;
      return __assign13(__assign13({}, oldState), (_a2 = {}, _a2[treeId] = __assign13(__assign13({}, oldState[treeId]), constructNewState((_b2 = oldState[treeId]) !== null && _b2 !== void 0 ? _b2 : {})), _a2));
    });
  }, []);
  (0, import_react33.useEffect)(function() {
    var dispose = dataProvider.onDidChangeTreeData(function(changedItemIds) {
      dataProvider.getTreeItems(changedItemIds).then(function(items) {
        writeItems(items.map(function(item) {
          var _a2;
          return _a2 = {}, _a2[item.index] = item, _a2;
        }).reduce(function(a, b) {
          return __assign13(__assign13({}, a), b);
        }, {}));
      });
    }).dispose;
    return dispose;
  }, [dataProvider, writeItems]);
  return React14.createElement(ControlledTreeEnvironment, __assign13({}, props, { ref, viewState, items: currentItems, onExpandItem: function(item, treeId) {
    var _a2;
    amendViewState(treeId, function(old) {
      var _a3;
      return __assign13(__assign13({}, old), { expandedItems: __spreadArray6(__spreadArray6([], (_a3 = old.expandedItems) !== null && _a3 !== void 0 ? _a3 : [], true), [item.index], false) });
    });
    (_a2 = props.onExpandItem) === null || _a2 === void 0 ? void 0 : _a2.call(props, item, treeId);
  }, onCollapseItem: function(item, treeId) {
    var _a2;
    amendViewState(treeId, function(old) {
      var _a3;
      return __assign13(__assign13({}, old), { expandedItems: (_a3 = old.expandedItems) === null || _a3 === void 0 ? void 0 : _a3.filter(function(id) {
        return id !== item.index;
      }) });
    });
    (_a2 = props.onCollapseItem) === null || _a2 === void 0 ? void 0 : _a2.call(props, item, treeId);
  }, onSelectItems: function(items, treeId) {
    var _a2, _b2, _c;
    var oldFocusedItem = (_a2 = viewStateRef.current[treeId]) === null || _a2 === void 0 ? void 0 : _a2.focusedItem;
    if (props.disableMultiselect) {
      var newSelected_1 = oldFocusedItem ? [oldFocusedItem] : [];
      (_b2 = props.onSelectItems) === null || _b2 === void 0 ? void 0 : _b2.call(props, newSelected_1, treeId);
      amendViewState(treeId, function(old) {
        return __assign13(__assign13({}, old), { selectedItems: newSelected_1 });
      });
    } else {
      (_c = props.onSelectItems) === null || _c === void 0 ? void 0 : _c.call(props, items, treeId);
      amendViewState(treeId, function(old) {
        return __assign13(__assign13({}, old), { selectedItems: items });
      });
    }
  }, onFocusItem: function(item, treeId) {
    var _a2;
    amendViewState(treeId, function(old) {
      return __assign13(__assign13({}, old), { focusedItem: item.index });
    });
    (_a2 = props.onFocusItem) === null || _a2 === void 0 ? void 0 : _a2.call(props, item, treeId);
  }, onRenameItem: function(item, name, treeId) {
    return __awaiter3(void 0, void 0, void 0, function() {
      var newItem;
      var _a2;
      var _b2;
      return __generator3(this, function(_c) {
        switch (_c.label) {
          case 0:
            return [4, dataProvider.onRenameItem(item, name)];
          case 1:
            _c.sent();
            amendViewState(treeId, function(old) {
              return __assign13(__assign13({}, old), { renamingItem: void 0 });
            });
            return [4, dataProvider.getTreeItem(item.index)];
          case 2:
            newItem = _c.sent();
            writeItems((_a2 = {}, _a2[item.index] = newItem, _a2));
            (_b2 = props.onRenameItem) === null || _b2 === void 0 ? void 0 : _b2.call(props, item, name, treeId);
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, onDrop: function(items, target) {
    return __awaiter3(void 0, void 0, void 0, function() {
      var promises, itemsIndices, itemsPriorToInsertion, _loop_1, _i, items_1, item, state_1, newParent, newParentChildren;
      var _a2, _b2, _c, _d, _e;
      return __generator3(this, function(_f) {
        switch (_f.label) {
          case 0:
            promises = [];
            itemsIndices = items.map(function(i) {
              return i.index;
            });
            itemsPriorToInsertion = 0;
            _loop_1 = function(item2) {
              var parent_1 = Object.values(currentItems).find(function(potentialParent) {
                var _a3, _b3;
                return (_b3 = (_a3 = potentialParent === null || potentialParent === void 0 ? void 0 : potentialParent.children) === null || _a3 === void 0 ? void 0 : _a3.includes) === null || _b3 === void 0 ? void 0 : _b3.call(_a3, item2.index);
              });
              if (!parent_1) {
                throw Error('Could not find parent of item "'.concat(item2.index, '"'));
              }
              if (!parent_1.children) {
                throw Error('Parent "'.concat(parent_1.index, '" of item "').concat(item2.index, '" did not have any children'));
              }
              if (target.targetType === "between-items" && target.parentItem === item2.index) {
                return { value: void 0 };
              }
              if ((target.targetType === "item" || target.targetType === "root") && target.targetItem !== parent_1.index) {
                promises.push(dataProvider.onChangeItemChildren(parent_1.index, parent_1.children.filter(function(child) {
                  return child !== item2.index;
                })));
              }
              if (target.targetType === "between-items") {
                if (target.parentItem === parent_1.index) {
                  var newParent2 = currentItems[target.parentItem];
                  var isOldItemPriorToNewItem = ((_b2 = ((_a2 = newParent2.children) !== null && _a2 !== void 0 ? _a2 : []).findIndex(function(child) {
                    return child === item2.index;
                  })) !== null && _b2 !== void 0 ? _b2 : Infinity) < target.childIndex;
                  itemsPriorToInsertion += isOldItemPriorToNewItem ? 1 : 0;
                } else {
                  promises.push(dataProvider.onChangeItemChildren(parent_1.index, parent_1.children.filter(function(child) {
                    return child !== item2.index;
                  })));
                }
              }
            };
            for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
              item = items_1[_i];
              state_1 = _loop_1(item);
              if (typeof state_1 === "object")
                return [2, state_1.value];
            }
            if (target.targetType === "item" || target.targetType === "root") {
              promises.push(dataProvider.onChangeItemChildren(target.targetItem, __spreadArray6(__spreadArray6([], ((_c = currentItems[target.targetItem].children) !== null && _c !== void 0 ? _c : []).filter(function(i) {
                return !itemsIndices.includes(i);
              }), true), itemsIndices, true)));
            } else {
              newParent = currentItems[target.parentItem];
              newParentChildren = __spreadArray6([], (_d = newParent.children) !== null && _d !== void 0 ? _d : [], true).filter(function(c) {
                return !itemsIndices.includes(c);
              });
              newParentChildren.splice.apply(newParentChildren, __spreadArray6([
                target.childIndex - itemsPriorToInsertion,
                0
              ], itemsIndices, false));
              promises.push(dataProvider.onChangeItemChildren(target.parentItem, newParentChildren));
            }
            return [4, Promise.all(promises)];
          case 1:
            _f.sent();
            (_e = props.onDrop) === null || _e === void 0 ? void 0 : _e.call(props, items, target);
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, onMissingItems: function(itemIds) {
    var _a2;
    var _b2;
    if (missingItemIds.current.length === 0) {
      setTimeout(function() {
        dataProvider.getTreeItems(missingItemIds.current).then(function(items) {
          writeItems(items.map(function(item) {
            var _a3;
            return _a3 = {}, _a3[item === null || item === void 0 ? void 0 : item.index] = item, _a3;
          }).reduce(function(a, b) {
            return __assign13(__assign13({}, a), b);
          }, {}));
        });
        missingItemIds.current = [];
      });
    }
    (_a2 = missingItemIds.current).push.apply(_a2, itemIds);
    (_b2 = props.onMissingItems) === null || _b2 === void 0 ? void 0 : _b2.call(props, itemIds);
  } }), props.children);
});

// node_modules/react-complex-tree/lib/esm/EventEmitter.js
var __awaiter4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator4 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var EventEmitter = (
  /** @class */
  function() {
    function EventEmitter2(options) {
      this.handlerCount = 0;
      this.handlers = [];
      this.options = options;
    }
    Object.defineProperty(EventEmitter2.prototype, "numberOfHandlers", {
      get: function() {
        return this.handlers.filter(function(h) {
          return !!h;
        }).length;
      },
      enumerable: false,
      configurable: true
    });
    EventEmitter2.prototype.emit = function(payload) {
      var _a, _b;
      return __awaiter4(this, void 0, void 0, function() {
        var promises, _i, _c, handler, res;
        return __generator4(this, function(_d) {
          switch (_d.label) {
            case 0:
              promises = [];
              (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.logger) === null || _b === void 0 ? void 0 : _b.call(_a, "emit", payload);
              for (_i = 0, _c = this.handlers; _i < _c.length; _i++) {
                handler = _c[_i];
                if (handler) {
                  res = handler(payload);
                  if (typeof (res === null || res === void 0 ? void 0 : res.then) === "function") {
                    promises.push(res);
                  }
                }
              }
              return [4, Promise.all(promises)];
            case 1:
              _d.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    EventEmitter2.prototype.on = function(handler) {
      var _a, _b;
      (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.logger) === null || _b === void 0 ? void 0 : _b.call(_a, "on");
      this.handlers.push(handler);
      return this.handlerCount++;
    };
    EventEmitter2.prototype.off = function(handlerId) {
      this.delete(handlerId);
    };
    EventEmitter2.prototype.delete = function(handlerId) {
      var _a, _b;
      (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.logger) === null || _b === void 0 ? void 0 : _b.call(_a, "off");
      this.handlers[handlerId] = null;
    };
    return EventEmitter2;
  }()
);

// node_modules/react-complex-tree/lib/esm/uncontrolledEnvironment/StaticTreeDataProvider.js
var __awaiter5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator5 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var StaticTreeDataProvider = (
  /** @class */
  function() {
    function StaticTreeDataProvider2(items, setItemName) {
      this.onDidChangeTreeDataEmitter = new EventEmitter();
      this.data = { items };
      this.setItemName = setItemName;
    }
    StaticTreeDataProvider2.prototype.getTreeItem = function(itemId) {
      return __awaiter5(this, void 0, void 0, function() {
        return __generator5(this, function(_a) {
          return [2, this.data.items[itemId]];
        });
      });
    };
    StaticTreeDataProvider2.prototype.onChangeItemChildren = function(itemId, newChildren) {
      return __awaiter5(this, void 0, void 0, function() {
        return __generator5(this, function(_a) {
          this.data.items[itemId].children = newChildren;
          this.onDidChangeTreeDataEmitter.emit([itemId]);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    StaticTreeDataProvider2.prototype.onDidChangeTreeData = function(listener) {
      var _this = this;
      var handlerId = this.onDidChangeTreeDataEmitter.on(function(payload) {
        return listener(payload);
      });
      return { dispose: function() {
        return _this.onDidChangeTreeDataEmitter.off(handlerId);
      } };
    };
    StaticTreeDataProvider2.prototype.onRenameItem = function(item, name) {
      return __awaiter5(this, void 0, void 0, function() {
        return __generator5(this, function(_a) {
          if (this.setItemName) {
            this.data.items[item.index] = this.setItemName(item, name);
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return StaticTreeDataProvider2;
  }()
);

// node_modules/react-complex-tree/lib/esm/index.js
var INTERNALS = {
  TreeItemElement,
  TreeItemChildren
};
export {
  ControlledTreeEnvironment,
  INTERNALS,
  InteractionMode,
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
  createDefaultRenderers,
  useControlledTreeEnvironmentProps,
  useTree,
  useTreeEnvironment,
  useTreeItemRenderContext
};
//# sourceMappingURL=react-complex-tree.js.map
