# PowerShell Script to fix floating-element border-radius in responsive.css

$filePath = "css\responsive.css"
$content = Get-Content $filePath -Raw

# Replace all floating-element definitions to include border-radius: 50%
$patterns = @(
    '(\s+\.floating-element\s*\{\s*width:\s*50px;\s*height:\s*50px;\s*font-size:\s*1\.25rem;\s*)\}',
    '(\s+\.floating-element\s*\{\s*width:\s*40px;\s*height:\s*40px;\s*font-size:\s*1rem;\s*)\}',
    '(\s+\.floating-element\s*\{\s*width:\s*35px;\s*height:\s*35px;\s*font-size:\s*0\.875rem;\s*)\}',
    '(\s+\.floating-element\s*\{\s*width:\s*30px;\s*height:\s*30px;\s*font-size:\s*0\.75rem;\s*)\}'
)

$replacements = @(
    '$1border-radius: 50%;' + "`n    }",
    '$1border-radius: 50%;' + "`n    }",
    '$1border-radius: 50%;' + "`n    }",
    '$1border-radius: 50%;' + "`n    }"
)

for ($i = 0; $i -lt $patterns.Length; $i++) {
    $content = $content -replace $patterns[$i], $replacements[$i]
}

# Write the updated content back to the file
Set-Content $filePath $content -Encoding UTF8

Write-Host "Fixed floating-element border-radius in responsive.css" -ForegroundColor Green
