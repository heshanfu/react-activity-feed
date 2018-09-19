// @flow
import * as React from 'react';
import '../styles/ReactionIcon.css';
import type { ReactionCounts, ReactionKindMap } from 'getstream';

type Props = {|
  activeIcon: string,
  inactiveIcon: string,
  icon: string | number,
  counts?: ReactionCounts,
  own_reactions: ?ReactionKindMap<{}, {}>,
  kind?: string,
  height?: number,
  width?: number,
  onPress?: (kind: ?string) => any,
  labelSingle?: string,
  labelPlural?: string,
|};

export default class ReactionIcon extends React.Component<Props> {
  render() {
    let count = null;
    if (this.props.counts && this.props.kind) {
      count = this.props.counts[this.props.kind] || 0;
    }

    let dimensions = {};
    if (this.props.height !== undefined) {
      dimensions.height = this.props.height;
    }
    if (this.props.width !== undefined) {
      dimensions.width = this.props.width;
    }
    let label = count === 1 ? this.props.labelSingle : this.props.labelPlural;

    return (
      <div className="raf-reaction-icon" onClick={this.props.onPress}>
        <img
          className="raf-reaction-icon__image"
          src={this.props.icon}
          alt=""
        />
        {count != null ? (
          <p className="raf-reaction-icon__label">
            {count}
            {label && ' ' + label}
          </p>
        ) : null}
      </div>
    );
  }
}