#!/usr/bin/env python3
"""
Script to download images, videos, and GIFs from Google Maps page
"""
import urllib.request
import urllib.error
import os
import re
from urllib.parse import urlparse, parse_qs
import json

# Create output directory
output_dir = "google-maps-media"
os.makedirs(output_dir, exist_ok=True)

# Image URLs found in network requests
# Remove duplicates by using a set, then convert to list
image_urls_set = {
    # Original URLs from initial page load
    "https://lh3.googleusercontent.com/p/AF1QipPsObH7dZd9d7kavG31TQZVsidvTCplUTQDlVeY=w408-h306-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipP2Edlz4SxUYcJEBap2DJp6rTQcXjJsv1ozXNY3=w224-h398-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPsObH7dZd9d7kavG31TQZVsidvTCplUTQDlVeY=w397-h298-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyi5DDAu2NOM9J3ao6Y-Zx1-Dwy5Vu-_xcdOGpR1lmIF2EZJosjFsR9e0uflooFOS4MO_C99vLu6IOG1CsXCI4TrP3zqjGz76--lE-_KaH9N0MhF_jrsAvm04cBq1yHUr2LXfdaMF3eYuI=w224-h407-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzVbIseXquOOZXLMiy2Qx5ge6v63pbbxxpB9rnfBU_5tMqGMprg3yufyCSXX2ZpJ--0xcrhJvop9kUmifqfLr5bwSiTplkd7VgRRkLCMXnmm4_e70eJ1LKxP-ZdOb4joBcFd5Ao=w312-h228-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPwd9Gwb5tkKdaYIB2gaijOqFO-MUzgCnzzgGlA=w312-h228-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipMCq-x4tqEPCdSKQNeHGgTPmQNz-aUTX4N1Bec8=w312-h228-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPGpXSECMw04U6uqsnWAyV7rr_SqyNBZ5FFDP_b=w312-h228-p-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipNxOmzWgO_IDjgkaDdqlgJLdn01u0zt1v7TeU5f=w312-h228-p-k-no",
    # Additional high-resolution URLs found when viewing photos
    "https://lh3.googleusercontent.com/p/AF1QipPsObH7dZd9d7kavG31TQZVsidvTCplUTQDlVeY=s1024-v1",
    "https://lh3.googleusercontent.com/p/AF1QipPsObH7dZd9d7kavG31TQZVsidvTCplUTQDlVeY=s901-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzj9ul2Di4AdsuGqXVlWAL9H-s7uKGqUrNkbXrivKZSCw5WK25i0Hm5ZQMXuzlY2Envk4oVPZp2KuWtVXiQnGH7ttIZCf8y0-8B4yDMeT9z0zVky3n1SNTbdyYG4kySlVmbHYM-pENPg4oJ=s1156-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5xyrSD64RxA2OStL3ZeSa7PhzjCUnTtTXz6PeA7QoUtu7zrrl70_Tdo30vGildc7W-4R7HS8dPOV7oXNsBJ8U9dfXlkbk_WDP8ylF4UTswVHDdb3d1_1WumJMcyo3AfZENrbtEDpIH8kI=s1016-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy95T-JPTXbPWX1b-FGJDTaXqOl0hjlBPB3aLGDutD-fQif3hBak_FC7uFj4hoJiEvYhvD2OOpzL9uAZkMdvPi2vQKsB6R11wdULPwdIhTOwxlmNiwvYQo4ToaIEf-uDS6SKVcV72ZDG7XC=s812-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwxaVLQhLOJjOmR_Hy16EvWIVuHrtSb4i16-bRSPWbH4FAy1N8kLN-SV_ncABJhfeOCS9d-zQxDQCDQAAO9Kz-bBSCn8AV87UxwNJpXr0uyifLMR55NDNVE3MWUSU9R4zSILXSMI1zRUaW5=s1016-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEiK4CwuL3Ziyp19K70JDGQlLdGpKAhuNPG65yznoGTy7j1HCcUrd-YfZfhmjCYjY0vTLTc74avBGV2B3vExQcy_ZA3OXfPpBymV_M0odvOi6iL5bEdf9oE4d8YhO3Qhxo4rAZ=s1354-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy77nyct6I4jM_WdlMWYY4oNP651E7SuF-5h6rvr1nQtq40ea0FDGhQLiPl_5m-sPKKjvhwNgqZN8XxgerDrE5QWkEICP1nJHLA18rPtqUQrlXcnr3TcLhQxPRdIS5sYnXPcUOMM3_HV8A=s1040-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipMuKC05CYdxca39NM8ZgP-iZI4SkKGCvHaIQRm-=s1016-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipPVPbR2AtRIBmJoGNz8ku_BN4-etPsSpXQVdHGr=s773-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyerVcG4F-KHG4dE5AM_PR01nKQZ7qYxbN-_RzNBYS45qKTOaCu2YJ875COW2hkTMqRt8Z_Pv9r5NeONSLcHrzVr8gxjWMBZtKohOfXmSpOy7cbSNRxhEhzvu1y5uvPz84R_42rgiSjFMk=s812-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyFMAhyPtliadm58oqym7h5fuJpy7BjLBBM9sA4MEUiP6adWGdgx2tJJ3S6wX5yG19s2nSxazEjKTtUGEbQbNeGC2EhaDtlBiLa0k8aCM_8WESCWyUAyIVQHusURnBQ2UYw17QvQh0OEL4A=s1031-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw4SYyQVU3Was0WI9aRVDS1bpUfNEZq1KD7LPN40SV61mN3fxvQH6HpQSQJ-v3QiiVliN1OpmA5J4p8VUALTvGrEblpJuIB92nGjEVCgI5OiVIMPSoOaW6Xu1hpTAnflBG2VZUfULl2CSeF=s1032-k-no",
    "https://lh3.googleusercontent.com/p/AF1QipM6u5zmrxAMBj-yPvSp53tz1X6EaRlkdQJdw7CE=w203-h270-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx0UfzrE-cZ26XJXo6xq-Spu7ZXwkDgX7Dabd7Qs0HMTaCiyz8CPn9wf4tumteb_I7yuf9_08AhuRuBu89tZK3Cwu2KPw23ZKHYXhiaufG7ycXwyL8bCHtHmxGZtxcyzs5GupvE=s1354-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz9wfef-w1sV4i1IwPNHzUjRb0i1OfwK5xV8X545oRUNDFnJs3NYdMVx7t5tlNelf3DECYl-lh5kxyIQ_wOt3KO7IZd6ukkZpoatmdeByUmQPPVDxa8qxWp8Vcg_FCqCFk2hs-2vQ=s1016-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyi5DDAu2NOM9J3ao6Y-Zx1-Dwy5Vu-_xcdOGpR1lmIF2EZJosjFsR9e0uflooFOS4MO_C99vLu6IOG1CsXCI4TrP3zqjGz76--lE-_KaH9N0MhF_jrsAvm04cBq1yHUr2LXfdaMF3eYuI=w203-h369-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxMpit7kLZkyaKPnGaCiLa4GIL33pjTP_E9iBt9VyERbaz_kgoIK7sWV7udEQM4G3RxeAtCGpByGZF2UxPz_KZkSWhgCkkE3uuh-zV8wsgYLQ1cB0YGuaSR1E2xW3Pnk9eJ4mmHXu1mkq8=w203-h360-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzzszv5rHMVJepIWOtwXc4_LSsz2F_KcbD4WBtr0zNDiOeeyQXpzSYutZwvkx-QONFH7qi-lFlkD23RjC9o37PrAwce40Ikem1y7qzWcJBhe5H_Htrjhrz_QEDsuftNugzGZwRUK__NaurQ=w203-h361-k-no",
}

# Convert to list for ordered processing
image_urls = list(image_urls_set)

# Remove size constraints to get full resolution images
def get_full_res_url(url):
    """Remove size constraints from Google image URLs to get full resolution"""
    if 'lh3.googleusercontent.com' in url:
        # For Google user content URLs
        if '=' in url:
            parts = url.split('=')
            if len(parts) > 1:
                base = parts[0]
                # Try different size options
                # s0 = original size, s2048 = 2048px, etc.
                # First try s0 (original), if that fails, try larger sizes
                return base + "=s0"
    return url

def download_file(url, filename):
    """Download a file from URL"""
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read()
            filepath = os.path.join(output_dir, filename)
            with open(filepath, 'wb') as f:
                f.write(content)
            print(f"Downloaded: {filename} ({len(content)} bytes)")
            return True
    except urllib.error.HTTPError as e:
        print(f"Failed to download {filename}: HTTP {e.code}")
        return False
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")
        return False

def get_file_extension(url):
    """Determine file extension from URL or content type"""
    parsed = urlparse(url)
    path = parsed.path
    # Check for common image extensions
    if '.jpg' in path or 'jpeg' in path.lower():
        return '.jpg'
    elif '.png' in path:
        return '.png'
    elif '.gif' in path:
        return '.gif'
    elif '.webp' in path:
        return '.webp'
    else:
        # Default to jpg for Google user content
        return '.jpg'

# Download all images
print(f"Downloading {len(image_urls)} images to {output_dir}/")
downloaded = 0
for i, url in enumerate(image_urls, 1):
    # Try full resolution first
    full_res_url = get_full_res_url(url)
    ext = get_file_extension(url)
    filename = f"image_{i:03d}{ext}"
    
    # Try full resolution
    if download_file(full_res_url, filename):
        downloaded += 1
    else:
        # Fallback to original URL
        if download_file(url, filename):
            downloaded += 1

print(f"\nDownloaded {downloaded} out of {len(image_urls)} images")

