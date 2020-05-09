let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.splice(energy.indexOf('fossil'), 1);
energy.push('geothermal');
console.log(energy);