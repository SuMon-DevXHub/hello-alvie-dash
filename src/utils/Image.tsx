import React from 'react';

import notion from '../assets/svg/notion.svg';
import google from '../assets/svg/google.svg';
import asana from '../assets/svg/asana.svg';
import github from '../assets/svg/github.svg';
import webflow from '../assets/svg/webflow.svg';
import tinder from '../assets/svg/tinder.svg';
import send_arrow from '../assets/svg/send_arrow.svg';
import boxes from '../assets/svg/boxex.svg';
import alvier from '../assets/svg/alvier.svg';
import instagram from '../assets/svg/instagram.svg';
import slack from '../assets/svg/slack.svg';
import twitter from '../assets/svg/twitter.svg';
import fabien_profile from '../assets/svg/fabien_profile.svg';
import erik_logo from '../assets/svg/erik_logo.svg';
import fabien_logo from '../assets/svg/fabien_logo.svg';
import github_logo from '../assets/svg/github_logo.svg';
import user_account from '../assets/svg/user_account.svg';
import cross from '../assets/svg/cross.svg';
import user_log from '../assets/svg/user_log.svg';
import search from '../assets/svg/search.svg';
import linear from '../assets/svg/linear.svg';
import edit from '../assets/svg/edit.svg';
import charlotte_logo from '../assets/svg/charlotte_logo.svg';
import chat_logo1 from '../assets/svg/chat_logo1.svg';
import chat_logo2 from '../assets/svg/chat_logo2.svg';
import chat_logo3 from '../assets/svg/chat_logo3.svg';
import erik_profile from '../assets/svg/erik_profile.svg';
import fabien_logo_cor from '../assets/svg/fabien_logo_cor.svg';
import julien_profile from '../assets/svg/julien_profile.svg';
import lucy_profile from '../assets/svg/lucy_profile.svg';
import home from '../assets/svg/home.svg';
import candidates from '../assets/svg/candidates.svg';
import adobe from '../assets/svg/adobe.svg';
import tick from '../assets/svg/tick.svg';
import love_red from '../assets/svg/love_red.svg';

type ImageProps = {
  name: string;
  className?: string;
  alt?: string;
  ariaLabel?: string;
};

export const Image: React.FC<ImageProps> = ({
  name,
  className,
  alt,
  ariaLabel,
}) => {
  const getIconSrc = (): string | null => {
    switch (name) {
      case 'notion':
        return notion;
      case 'google':
        return google;
      case 'asana':
        return asana;
      case 'github':
        return github;
      case 'webflow':
        return webflow;
      case 'tinder':
        return tinder;
      case 'send_arrow':
        return send_arrow;
      case 'boxes':
        return boxes;
      case 'alvier':
        return alvier;
      case 'instagram':
        return instagram;
      case 'slack':
        return slack;
      case 'twitter':
        return twitter;
      case 'fabien_profile':
        return fabien_profile;
      case 'fabien_logo':
        return fabien_logo;
      case 'erik_logo':
        return erik_logo;
      case 'twitter':
        return twitter;
      case 'github_logo':
        return github_logo;
      case 'user_account':
        return user_account;
      case 'cross':
        return cross;
      case 'user_log':
        return user_log;
      case 'linear':
        return linear;
      case 'edit':
        return edit;
      case 'search':
        return search;
      case 'charlotte_logo':
        return charlotte_logo;
      case 'chat_logo1':
        return chat_logo1;
      case 'chat_logo2':
        return chat_logo2;
      case 'chat_logo3':
        return chat_logo3;
      case 'erik_profile':
        return erik_profile;
      case 'fabien_logo_cor':
        return fabien_logo_cor;
      case 'julien_profile':
        return julien_profile;
      case 'lucy_profile':
        return lucy_profile;
      case 'home':
        return home;
      case 'candidates':
        return candidates;
      case 'adobe':
        return adobe;
      case 'tick':
        return tick;
        case 'love_red':
        return love_red;
      default:
        return null;
    }
  };

  const iconSrc = getIconSrc();

  if (!iconSrc) {
    return <span>Icon not found</span>;
  }

  return (
    <img
      src={iconSrc}
      alt={alt ? alt : `${name} icon`}
      className={className}
      aria-label={ariaLabel}
    />
  );
};
