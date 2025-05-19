# WebView App

An Android application that uses WebView to load local HTML files from the app's assets folder. This app provides a seamless offline content experience with an elegant, user-friendly design.

## Features

- **Local WebView Functionality**: The app loads HTML files stored locally in the assets folder, supporting CSS and JavaScript resources. Users can navigate between pages within the app.

- **Elegant Design**: Uses modern UI components following Material Design guidelines, with a clean and professional look.

- **Privacy Policy Integration**: Includes a dedicated privacy policy page accessible from the main navigation and footer.

- **Offline Support**: All content is stored locally, allowing users to access it even without an internet connection.

- **Error Handling**: Displays a user-friendly error page when content fails to load.

- **Responsive Design**: Optimized for various screen sizes and orientations, providing a consistent experience across different devices.

## Project Structure

```
app/
├── src/
│   └── main/
│       ├── assets/           # Local HTML, CSS, and JavaScript files
│       │   ├── index.html    # Main homepage
│       │   ├── about.html    # About page
│       │   ├── content.html  # Content page
│       │   ├── privacy.html  # Privacy policy
│       │   ├── error.html    # Error page
│       │   ├── styles.css    # CSS styling
│       │   └── scripts.js    # JavaScript functionality
│       ├── java/             # Java source code
│       │   └── com/example/webviewapp/
│       │       └── MainActivity.java # Main activity with WebView setup
│       ├── res/              # Android resources
│       │   ├── drawable/     # App icons and graphics
│       │   ├── layout/       # Layout files
│       │   └── values/       # Strings, colors, and styles
│       └── AndroidManifest.xml # App manifest
├── build.gradle              # App-level build configuration
└── proguard-rules.pro        # ProGuard rules
```

## Development Setup

1. Clone this repository
2. Open the project in Android Studio
3. Build and run the app on an emulator or physical device

## Customization

### Adding or Updating Content

To add or update content:

1. Place your HTML files in the `app/src/main/assets/` directory
2. Update links in the navigation as needed
3. Ensure all resources (CSS, JavaScript, images) are also placed in the assets directory

### Modifying the WebView Settings

WebView settings can be adjusted in `MainActivity.java`. The current configuration includes:

- JavaScript enabled
- DOM Storage enabled
- File access allowed
- Cache mode set to default
- Optimized for different screen sizes

## Play Store Submission

Before submitting to the Google Play Store:

1. Update the app icons with your own branded graphics
2. Customize the privacy policy with your specific information
3. Complete all required metadata for the Play Store listing
4. Ensure the app meets all Play Store guidelines and requirements

## License

Copyright © 2025 WebView App