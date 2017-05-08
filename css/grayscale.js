import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // !
 * Start Bootstrap - Grayscale v3.3.7+1 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontFamily': '"Lora", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'color': 'white',
    'backgroundColor': 'white'
  },
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '700',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'color': 'black'
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': 'black',
    '>w768': {
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }],
      'fontSize': [{ 'unit': 'px', 'value': 20 }],
      'lineHeight': [{ 'unit': 'px', 'value': 1.6 }]
    }
  },
  'a': {
    'color': '#42DCA3',
    'WebkitTransition': 'all 0.2s ease-in-out',
    'MozTransition': 'all 0.2s ease-in-out',
    'transition': 'all 0.2s ease-in-out'
  },
  'a:hover': {
    'textDecoration': 'none',
    'color': '#1d9b6c'
  },
  'a:focus': {
    'textDecoration': 'none',
    'color': '#1d9b6c'
  },
  'light': {
    'fontWeight': '400'
  },
  'navbar-custom': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.3)' }],
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'backgroundColor': 'black',
    '>w768': {
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
      'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
      'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
      'background': 'transparent',
      'WebkitTransition': 'background 0.5s ease-in-out, padding 0.5s ease-in-out',
      'MozTransition': 'background 0.5s ease-in-out, padding 0.5s ease-in-out',
      'transition': 'background 0.5s ease-in-out, padding 0.5s ease-in-out'
    }
  },
  'navbar-custom navbar-toggle': {
    'color': 'white',
    'backgroundColor': 'rgba(255, 255, 255, 0.2)',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'navbar-custom navbar-toggle:focus': {
    'outline': 'none'
  },
  'navbar-custom navbar-toggle:active': {
    'outline': 'none'
  },
  'navbar-custom navbar-brand': {
    'fontWeight': '700'
  },
  'navbar-custom navbar-brand:focus': {
    'outline': 'none'
  },
  'navbar-custom a': {
    'color': 'white'
  },
  'navbar-custom nav li a': {
    'WebkitTransition': 'background 0.3s ease-in-out',
    'MozTransition': 'background 0.3s ease-in-out',
    'transition': 'background 0.3s ease-in-out'
  },
  'navbar-custom nav li a:hover': {
    'color': 'rgba(255, 255, 255, 0.8)',
    'outline': 'none',
    'backgroundColor': 'transparent'
  },
  'navbar-custom nav li a:focus': {
    'outline': 'none',
    'backgroundColor': 'transparent'
  },
  'navbar-custom nav li a:active': {
    'outline': 'none',
    'backgroundColor': 'transparent'
  },
  'navbar-custom nav liactive': {
    'outline': 'none'
  },
  'navbar-custom nav liactive a': {
    'backgroundColor': 'rgba(255, 255, 255, 0.3)'
  },
  'navbar-custom nav liactive a:hover': {
    'color': 'white'
  },
  'intro': {
    'display': 'table',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'color': 'white',
    'background': 'url(../img/intro-bg.jpg) no-repeat bottom center scroll',
    'backgroundColor': 'black',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    '>w768': {
      'height': [{ 'unit': '%V', 'value': 1 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'intro intro-body': {
    'display': 'table-cell',
    'verticalAlign': 'middle'
  },
  'intro intro-body brand-heading': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }]
  },
  'intro intro-body intro-text': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'btn-circle': {
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 70 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'borderRadius': '100% !important',
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': 'white',
    'background': 'transparent',
    'WebkitTransition': 'background 0.3s ease-in-out',
    'MozTransition': 'background 0.3s ease-in-out',
    'transition': 'background 0.3s ease-in-out'
  },
  'btn-circle:hover': {
    'outline': 'none',
    'color': 'white',
    'background': 'rgba(255, 255, 255, 0.1)'
  },
  'btn-circle:focus': {
    'outline': 'none',
    'color': 'white',
    'background': 'rgba(255, 255, 255, 0.1)'
  },
  'btn-circle ianimated': {
    'WebkitTransitionProperty': '-webkit-transform',
    'WebkitTransitionDuration': '1s',
    'MozTransitionProperty': '-moz-transform',
    'MozTransitionDuration': '1s'
  },
  'btn-circle:hover ianimated': {
    'WebkitAnimationName': 'pulse',
    'MozAnimationName': 'pulse',
    'WebkitAnimationDuration': '1.5s',
    'MozAnimationDuration': '1.5s',
    'WebkitAnimationIterationCount': 'infinite',
    'MozAnimationIterationCount': 'infinite',
    'WebkitAnimationTimingFunction': 'linear',
    'MozAnimationTimingFunction': 'linear'
  },
  'content-section': {
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    '>w767': {
      'paddingTop': [{ 'unit': 'px', 'value': 250 }]
    }
  },
  'download-section': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'color': 'white',
    'background': 'url(../img/downloads-bg.jpg) no-repeat center center scroll',
    'backgroundColor': 'black',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'OBackgroundSize': 'cover'
  },
  'feature': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'color': 'white',
    'background': 'url(../img/background_feature.jpg) no-repeat center center scroll',
    'backgroundColor': 'black',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'backgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'overflow': 'auto'
  },
  'container': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'f_mask': {
  },
  'text': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'pic': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'set-mid': {
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'mid': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  '#map': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'marginTop': [{ 'unit': 'px', 'value': 100 }]
  },
  'btn': {
    'textTransform': 'uppercase',
    'fontFamily': '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'fontWeight': '400',
    'WebkitTransition': 'all 0.3s ease-in-out',
    'MozTransition': 'all 0.3s ease-in-out',
    'transition': 'all 0.3s ease-in-out',
    'borderRadius': '0'
  },
  'btn-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#42DCA3' }],
    'color': '#42DCA3',
    'backgroundColor': 'transparent'
  },
  'btn-default:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#42DCA3' }],
    'outline': 'none',
    'color': 'black',
    'backgroundColor': '#42DCA3'
  },
  'btn-default:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#42DCA3' }],
    'outline': 'none',
    'color': 'black',
    'backgroundColor': '#42DCA3'
  },
  'ulbanner-social-buttons': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    '<w1199': {
      'marginTop': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'footer': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '::-moz-selection': {
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'background': '#fcfcfc',
    'background': 'rgba(255, 255, 255, 0.2)'
  },
  '::selection': {
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'background': '#fcfcfc',
    'background': 'rgba(255, 255, 255, 0.2)'
  },
  'img::selection': {
    'background': 'transparent'
  },
  'img::-moz-selection': {
    'background': 'transparent'
  },
  'body': {
    'webkitTapHighlightColor': 'rgba(255, 255, 255, 0.2)'
  },
  'about-row': {
    'textAlign': 'center'
  },
  'about-row::before': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'about-p': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  }
});
