# Website-Theme-Animator
A bit of javascript that allows you to change the theme of almost any website, as well as make it fade between multiple colour combinations!

## Usage
Press CTRL+SHIFT+I to enter the console on your browser on any website. Simply paste in the code from either themes.js or themes-min.js to activate it!
- The colour gradient is customisable. In both provided code samples, near the start there will be lists of `hues`, `sats` and `lums`, for hue, saturation, and luminance multiplier respectively. Add values to these to include more possible colours in the gradient! Note that the last value in each list snaps back to the first, and is only kept for interpolation direction.
	- a rainbow gradient (the default) would be `hues=[0,0.333,0.667,1],sats=[1],lums=[1]`
	- a gold gradient would be something like `hues=[0.141,0.125,0.133,0.141],sats=[1,0.667,0.875,0.75,1],lums=[0.6,0.8,1.2,0.9,0.7,0.6]`
	- a solid red shade would be `hues=[0],sats=[1],lums=[1]`
	- a black and white gradient would be `hues=[0],sats=[0],lums=[0,1,0]`
- The value of `period` affects how long the gradient animation lasts for, in milliseconds. The default value is 8000 or 8e3, meaning 8 seconds.
- Simply reload the page if you want to remove the effect!
