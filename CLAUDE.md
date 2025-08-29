# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a RiveClock application that displays an animated flip clock using Rive animations. The project is currently in a simplified development state focusing on the core flip clock animation functionality with animated digit transitions.

## Architecture

The application is a single-page application with one main component:
- **Flip Clock Display**: Shows time with animated digit flip transitions using a single Rive animation

### Key Files

- `index.html` - Main HTML structure with single canvas element for Rive animation
- `script.js` - Current active flip clock implementation
- `flip_clock_r10_(2).riv` - Rive animation file containing flip clock with digit animations

### Rive Integration

The project uses one Rive instance:
- **Flip Clock** (`flip_clock_r10_(2).riv`) - Primary time display with artboard "Main" and state machine "State Machine 1"

### Current Implementation

- **View Models**: Uses VM H1, VM H2, VM M1, VM M2 for each digit position
- **Data Binding**: Each view model has `CurrentTime` and `OldTime` number inputs for flip animations
- **Demo Mode**: Currently displays minutes as "hours" and seconds as "minutes" for testing/demo purposes
- **Real-time Updates**: Updates every second using `setInterval`

### Key Features (Current)

- **Animated Digit Transitions**: Smooth flip animations between digit changes
- **Four-Digit Display**: HH:MM format with individual digit control
- **Real-time Clock**: Updates continuously with current time
- **Responsive Canvas**: Automatically resizes to fit container

### Development Notes

- No package.json or build system - this is a static web application
- Uses CDN for Rive WebGL2 library (`https://unpkg.com/@rive-app/WebGL2`)
- View model bindings update Rive animations in real-time
- Canvas automatically resizes on window resize and device pixel ratio changes

### Future Features (Not Yet Implemented)

The following features were in previous versions but are not currently active:
- Control panel interface
- Weather integration and API calls
- Multiple display modes and screens
- Layout switching between horizontal/vertical
- Speed controls and demo modes
- Geolocation-based features

## Running the Application

Simply open `index.html` in a web browser. The application will:
1. Load Rive animation from CDN
2. Initialize flip clock with "Main" artboard
3. Start real-time updates every second
4. Display animated time transitions

No build process or development server is required.