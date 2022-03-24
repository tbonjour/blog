
// <script>
//     function toggleTheme() {

//     // Obtains an array of all <link> elements.
//     // Select your element using indexing.
//     // console.log(4);
//     // document.getElementById('mytheme').setAttribute('href','/blog/assets/css/dark.css');
//     var theme = document.getElementById('mytheme')
//     let stored_theme = sessionStorage.getItem('stored_theme');
//     // Change the value of href attribute 

//     // to change the css sheet.
//     // theme.setAttribute("href", "{{ "/assets/css/dark.css" | relative_url }}");

//     if (theme.getAttribute('href') == "{{ "/assets/css/style.css" | relative_url }}") {

//         theme.setAttribute('href', "{{ "/assets/css/dark.css" | relative_url }}");
//         sessionStorage.setItem('stored_theme', 'dark');
//       } else {
//         theme.setAttribute('href', "{{ "/assets/css/style.css" | relative_url }}");
//         sessionStorage.setItem('stored_theme', 'light');
//       }
//     }
//   </script> 
//https://derekkedziora.com/blog/dark-mode-revisited
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
console.log(systemInitiatedDark)
var mytheme = document.getElementById('mytheme')
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
  	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
  	   	// document.getElementById("theme-toggle").innerHTML = "Light Mode";

  	// mytheme.setAttribute('href', "{{ "/assets/css/style.css" | relative_url }}");

		// mytheme.setAttribute('href', "{{ "/assets/css/dark.css" | relative_url }}");   	
   	sessionStorage.setItem('theme', 'dark');
  } else {
  	mytheme.setAttribute('href', '/blog/assets/css/style.css');
    // document.getElementById("theme-toggle").innerHTML = "Dark Mode";

    sessionStorage.setItem('theme', 'light');
  }

// if (systemInitiatedDark.matches) {
//   	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
//   	   	// document.getElementById("theme-toggle").innerHTML = "Light Mode";

//   	// mytheme.setAttribute('href', "{{ "/assets/css/style.css" | relative_url }}");

// 		// mytheme.setAttribute('href', "{{ "/assets/css/dark.css" | relative_url }}");   	
//    	sessionStorage.setItem('theme', 'dark');}
// let theme = sessionStorage.getItem('theme');
// console.log("mode-switcher.js")
// if (systemInitiatedDark.matches) {
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

function prefersColorTest(systemInitiatedDark) {
	var mytheme = document.getElementById('mytheme')
	console.log(theme)
	console.log("prefersColorTest")

  if (systemInitiatedDark.matches) {
  	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
  	   	// document.getElementById("theme-toggle").innerHTML = "Light Mode";

  	// mytheme.setAttribute('href', "{{ "/assets/css/style.css" | relative_url }}");

		// mytheme.setAttribute('href', "{{ "/assets/css/dark.css" | relative_url }}");   	
   	sessionStorage.setItem('theme', 'dark');
  } else {
  	mytheme.setAttribute('href', '/blog/assets/css/style.css');
    // document.getElementById("theme-toggle").innerHTML = "Dark Mode";

    sessionStorage.setItem('theme', 'light');
  }
}
systemInitiatedDark.addEventListener("change", prefersColorTest);
// systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
  	mytheme.setAttribute('href', '/blog/assets/css/style.css');
		sessionStorage.setItem('theme', 'light');
				// document.getElementById("theme-toggle").innerHTML = "Dark Mode";

	}	else if (theme === "light") {
  	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
		sessionStorage.setItem('theme', 'dark');
			// document.getElementById("theme-toggle").innerHTML = "Light Mode";

	} else if (systemInitiatedDark.matches) {	
  	mytheme.setAttribute('href', '/blog/assets/css/style.css');
		sessionStorage.setItem('theme', 'light');
				// document.getElementById("theme-toggle").innerHTML = "Dark Mode";

	} else {
  	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
		sessionStorage.setItem('theme', 'dark');
			// document.getElementById("theme-toggle").innerHTML = "Light Mode";

	}
}

if (theme === "dark") {
  	mytheme.setAttribute('href', '/blog/assets/css/dark.css');
	sessionStorage.setItem('theme', 'dark');
	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
  	mytheme.setAttribute('href', '/blog/assets/css/style.css');
	sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";

}