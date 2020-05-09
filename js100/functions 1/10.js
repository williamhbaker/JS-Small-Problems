let extractRegion = function extractRegionFromLocale(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));
