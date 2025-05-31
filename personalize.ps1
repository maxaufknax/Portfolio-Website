# Portfolio Personalization Script
# Run this script to quickly replace placeholder content with your actual information

param(
    [Parameter(Mandatory=$true)]
    [string]$YourName,
    
    [Parameter(Mandatory=$true)]
    [string]$YourEmail,
    
    [Parameter(Mandatory=$false)]
    [string]$YourLinkedIn = "",
    
    [Parameter(Mandatory=$false)]
    [string]$YourGitHub = "",
    
    [Parameter(Mandatory=$false)]
    [string]$YourPortfolioURL = ""
)

Write-Host "🚀 Personalizing Portfolio Website..." -ForegroundColor Green

# Get all HTML files
$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse

# Replace placeholders in HTML files
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace name placeholders
    $content = $content -replace '\[Ihr Name\]', $YourName
    $content = $content -replace 'Ihr Name', $YourName
    
    # Replace email
    $content = $content -replace 'your\.email@example\.com', $YourEmail
    
    # Replace social links if provided
    if ($YourLinkedIn) {
        $content = $content -replace 'https://linkedin\.com/in/yourprofile', $YourLinkedIn
    }
    
    if ($YourGitHub) {
        $content = $content -replace 'https://github\.com/yourusername', $YourGitHub
    }
    
    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "✓ Updated: $($file.Name)" -ForegroundColor Yellow
}

# Update QR generator URL if provided
if ($YourPortfolioURL) {
    $qrFile = "js\qr-generator.js"
    if (Test-Path $qrFile) {
        $content = Get-Content $qrFile -Raw -Encoding UTF8
        $content = $content -replace "this\.defaultUrl = 'https://your-portfolio\.com';", "this.defaultUrl = '$YourPortfolioURL';"
        Set-Content $qrFile $content -Encoding UTF8
        Write-Host "✓ Updated QR generator URL" -ForegroundColor Yellow
    }
}

Write-Host "`n🎉 Portfolio personalization complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Add your project images to the 'images' folder"
Write-Host "2. Update project links and descriptions"
Write-Host "3. Deploy to your preferred platform"
Write-Host "4. Test all functionality"

# Example usage comment
Write-Host "`nExample usage:" -ForegroundColor Gray
Write-Host ".\personalize.ps1 -YourName 'Max Mustermann' -YourEmail 'max.mustermann@example.com' -YourLinkedIn 'https://linkedin.com/in/maxmustermann' -YourGitHub 'https://github.com/maxmustermann'"
