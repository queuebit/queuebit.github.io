'use strict';

(function() {
  var client = new Keen({
    projectId: '5707fc54e0855774759365f2',
    writeKey: 	'60de17ca47a3d2bc05cd62d16' +
				'c8e2f49b9be5de81a3a7a3bd5' +
				'2555195ddc99c56bd638fdc3f' + 
				'9ca4905a585d6673a8a4058e7' + 
				'e775c6c45805110b95f25414d' +
				'3fb0045b497aef00e1b313b6a' +
				'5ac3b0d5d9fb90aadf919cde3' +
				'31535247d798b6efc'
  });

  setTimeout(function() {
    client.addEvent('pageviews', getMetrics(), function(err, res) {
      if (err) {
        console.error(err);
      }
    });
  }, 1000);

  var getMetrics = function() {
    var metrics = {
      source: getSourceMetrics(),
      visitor: getVisitorMetrics(),
      page: getPageMetrics()
    };
    return metrics;
  };

  var getVisitorMetrics = function() {
    return {
      browser: getBrowser(),
      language: window.navigator.language
    };
  };

  var getSourceMetrics = function() {
    if (window.document.referrer) {
      var d = window.document.referrer.match(/\/\/(.+)\//);
      var referring_domain = d ? d[1] : '';
    } else {
      var referring_domain = '';
    }
    return {
      referring_domain: referring_domain,
      referrer: window.document.referrer
    };
  };

  var getBrowser = function() {
    var ua = window.navigator.userAgent;
    if (/Firefox/.test(ua) && !/Seamonkey/.test(ua)) {
      return 'Firefox';
    } else if (/Seamonkey/.test(ua)) {
      return 'Seamonkey';
    } else if (/Chrome/.test(ua) && !/Chromium/.test(ua)) {
      return 'Chrome';
    } else if (/Chromium/.test(ua)) {
      return 'Chromium';
    } else if (
      /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua)
    ) {
      return 'Safari';
    } else if (/OPR/.test(ua) || /Opera/.test(ua)) {
      return 'Opera';
    } else if (/MSIE/.test(ua)) {
      return 'Internet Explorer';
    } else {
      return 'Unknown';
    }
  };

  var getPageMetrics = function() {
    return {
      path: window.location.pathname,
      title: window.document.title
    };
  };
})();
