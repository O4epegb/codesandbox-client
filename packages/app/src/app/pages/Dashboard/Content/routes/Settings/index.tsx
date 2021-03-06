import React from 'react';
import { useLocation } from 'react-router-dom';
import { useOvermind } from 'app/overmind';
import { Element } from '@codesandbox/components';
import { TeamSettings } from './TeamSettings';
import { UserSettings } from './UserSettings';
import { NewTeam } from './NewTeam';
import { Invite } from './Invite';

export const Settings = () => {
  const { state } = useOvermind();
  const location = useLocation();

  const getComponent = () => {
    if (location.pathname.includes('settings/new')) {
      return NewTeam;
    }
    if (location.pathname.includes('invite')) {
      return Invite;
    }
    if (state.activeTeam === state.personalWorkspaceId) {
      return UserSettings;
    }

    return TeamSettings;
  };

  const Component = getComponent();

  return (
    <Element marginY={10}>
      <Component />
    </Element>
  );
};
