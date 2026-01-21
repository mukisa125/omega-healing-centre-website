# Church Image Setup Instructions

## Problem
The hero section is configured to use `/church-building.jpg` but the image file is empty.

## Solution - Save Your Church Image

### Option 1: Manual Save (Recommended)
1. Right-click on the church building image you uploaded
2. Save it as `church-building.jpg`
3. Place it in: `f:\Desktop\Omega Site Resources\Omega Website\public\church-building.jpg`
4. Refresh your browser

### Option 2: Copy from Your Files
If you have the image saved elsewhere:
1. Copy your church building image
2. Rename it to `church-building.jpg`
3. Paste it into the `public` folder
4. Replace the existing empty file

### Option 3: Use Image URL
If the image is hosted online, you can use the URL directly in the HeroSection component.

## Verify Image is Working
After saving the image:
1. Check the file size - it should be more than 0 KB
2. Open the image file to verify it displays correctly
3. Refresh your browser at http://localhost:3000
4. The church building should appear as the hero background

## Current Configuration
The hero section is looking for the image at:
- File path: `/church-building.jpg` (relative to public folder)
- Full path: `f:\Desktop\Omega Site Resources\Omega Website\public\church-building.jpg`
