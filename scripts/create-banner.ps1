Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = [System.Drawing.Bitmap]::new($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background rich dark slate gradient
$rect = [System.Drawing.Rectangle]::new(0, 0, $width, $height)
$c1 = [System.Drawing.ColorTranslator]::FromHtml("#060A12")
$c2 = [System.Drawing.ColorTranslator]::FromHtml("#0F172A")
$brushBg = [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, $c1, $c2, [float]45.0)
$g.FillRectangle($brushBg, $rect)

# Ambient orange glow
$glowBrush1 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(40, 255, 107, 30))
$g.FillEllipse($glowBrush1, 750, -80, 650, 650)
$glowBrush2 = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(30, 255, 140, 0))
$g.FillEllipse($glowBrush2, -120, 260, 480, 480)

# Subtle grid pattern
$gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(15, 255, 255, 255), [float]1)
for ($x = 0; $x -lt $width; $x += 60) {
    $g.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -lt $height; $y += 60) {
    $g.DrawLine($gridPen, 0, $y, $width, $y)
}

# Rounded card helper
function DrawRoundedRect($g, $brush, $pen, $x, $y, $w, $h, $radius) {
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = $radius * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    
    if ($brush -ne $null) { $g.FillPath($brush, $path) }
    if ($pen -ne $null) { $g.DrawPath($pen, $path) }
    $path.Dispose()
}

# White sleek card container for Brandmingo logo
$cardX = 80
$cardY = 60
$cardW = 340
$cardH = 80
$cardBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
$cardBorderPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#ff6b1e"), [float]2)
DrawRoundedRect $g $cardBrush $cardBorderPen $cardX $cardY $cardW $cardH 16

# Draw Brandmingo full logo inside card
$logoPath = "c:\websitedevelopmentexpert\public\images\brandmingo-logo.png"
if (Test-Path $logoPath) {
    $logo = [System.Drawing.Image]::FromFile($logoPath)
    $destW = 300
    $destH = [int]($logo.Height * ($destW / $logo.Width))
    if ($destH -gt 60) {
        $destH = 60
        $destW = [int]($logo.Width * ($destH / $logo.Height))
    }
    $destX = $cardX + [int](($cardW - $destW) / 2)
    $destY = $cardY + [int](($cardH - $destH) / 2)
    $g.DrawImage($logo, $destX, $destY, $destW, $destH)
    $logo.Dispose()
}

# Badge: "INDIA'S PREMIER WEB & SHOPIFY AGENCY"
$tagBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(45, 255, 107, 30))
$tagPen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#ff6b1e"), [float]1)
DrawRoundedRect $g $tagBrush $tagPen 80 168 390 34 8

$fontTag = [System.Drawing.Font]::new("Segoe UI", [float]10.5, [System.Drawing.FontStyle]::Bold)
$tagTextBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#ff8c42"))
$g.DrawString("INDIA'S PREMIER WEB & SHOPIFY AGENCY", $fontTag, $tagTextBrush, [float]95, [float]176)

# Main Heading
$fontMain = [System.Drawing.Font]::new("Segoe UI", [float]35, [System.Drawing.FontStyle]::Bold)
$whiteBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
$g.DrawString("Website & Shopify Development", $fontMain, $whiteBrush, [float]76, [float]220)

# Subtitle
$fontSub = [System.Drawing.Font]::new("Segoe UI", [float]15.5, [System.Drawing.FontStyle]::Regular)
$grayBrush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#cbd5e1"))
$g.DrawString("Next.js  *  Shopify Plus  *  React  *  Python  *  100% Core Web Vitals", $fontSub, $grayBrush, [float]80, [float]290)

# 3 Trust Feature Badges
function DrawMetricCard($g, $x, $y, $w, $h, $title, $sub) {
    $bBg = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
    $bBorder = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(70, 255, 255, 255), [float]1)
    DrawRoundedRect $g $bBg $bBorder $x $y $w $h 12
    
    $fTitle = [System.Drawing.Font]::new("Segoe UI", [float]15, [System.Drawing.FontStyle]::Bold)
    $fSub = [System.Drawing.Font]::new("Segoe UI", [float]9.5, [System.Drawing.FontStyle]::Regular)
    $orangeB = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#ff8c42"))
    $lightB = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml("#94a3b8"))
    
    $g.DrawString($title, $fTitle, $orangeB, [float]($x + 18), [float]($y + 12))
    $g.DrawString($sub, $fSub, $lightB, [float]($x + 18), [float]($y + 38))
}

DrawMetricCard $g 80 355 220 72 "100 / 100" "Core Web Vitals Speed"
DrawMetricCard $g 320 355 220 72 "250+ Sites" "High-Conversion Launch"
DrawMetricCard $g 560 355 230 72 "Page #1 Rank" "Google SEO Architecture"

# Right side: Vibrant Flame Emblem
$iconPath = "c:\websitedevelopmentexpert\public\images\brandmingo-icon.png"
if (Test-Path $iconPath) {
    $icon = [System.Drawing.Image]::FromFile($iconPath)
    $g.DrawImage($icon, 880, 140, 250, 300)
    $icon.Dispose()
}

# Footer strip
$footerRect = [System.Drawing.Rectangle]::new(0, 555, $width, 75)
$footerBg = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 6, 10, 18))
$g.FillRectangle($footerBg, $footerRect)
$linePen = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml("#ff6b1e"), [float]2)
$g.DrawLine($linePen, 0, 555, $width, 555)

$fontFooter = [System.Drawing.Font]::new("Segoe UI", [float]13, [System.Drawing.FontStyle]::Bold)
$g.DrawString("brandmingo.com", $fontFooter, $whiteBrush, [float]80, [float]580)

$fontContact = [System.Drawing.Font]::new("Segoe UI", [float]11.5, [System.Drawing.FontStyle]::Regular)
$g.DrawString("Call: +91 99906 13140   |   Noida, Delhi NCR   |   Pan-India", $fontContact, $grayBrush, [float]700, [float]582)

# Save images
$destBanner = "c:\websitedevelopmentexpert\public\images\brandmingo-banner.png"
$bmp.Save($destBanner, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save("c:\websitedevelopmentexpert\public\images\og-banner.png", [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
Write-Output "SUCCESS: Clean banner saved at $destBanner"
