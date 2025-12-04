<?php
// Check if form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize input data
    $fullName = htmlspecialchars(trim($_POST['fullName']));
    $usn = htmlspecialchars(trim($_POST['usn']));
    $department = htmlspecialchars(trim($_POST['department']));
    $year = htmlspecialchars(trim($_POST['year']));
    $section = htmlspecialchars(trim($_POST['section']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    
    // Generate a reference number
    $referenceNumber = "REG" . date("Ymd") . rand(1000, 9999);
    
} else {
    // Redirect to form if accessed directly
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="confirmation-wrapper">
            
            <!-- Success Icon -->
            <div class="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </div>

            <!-- Success Message -->
            <div class="success-message">
                <h1>Registration Successful!</h1>
                <p>Your application has been submitted successfully.</p>
            </div>

            <!-- Student Details Card -->
            <div class="details-card">
                <h2 style="color: #333; margin-bottom: 25px; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                    Student Information
                </h2>

                <div class="detail-row">
                    <div class="detail-label">Reference Number:</div>
                    <div class="detail-value"><strong style="color: #667eea;"><?php echo $referenceNumber; ?></strong></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Full Name:</div>
                    <div class="detail-value"><?php echo $fullName; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">USN Number:</div>
                    <div class="detail-value"><?php echo $usn; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Department:</div>
                    <div class="detail-value"><?php echo $department; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Year:</div>
                    <div class="detail-value"><?php echo $year; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Section:</div>
                    <div class="detail-value"><?php echo $section; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Phone Number:</div>
                    <div class="detail-value"><?php echo $phone; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value"><?php echo $email; ?></div>
                </div>

                <div class="detail-row">
                    <div class="detail-label">Submission Date:</div>
                    <div class="detail-value"><?php echo date("F j, Y, g:i a"); ?></div>
                </div>
            </div>

            <!-- Additional Information -->
            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 5px; margin-bottom: 25px;">
                <p style="color: #856404; margin: 0; font-size: 14px;">
                    <strong>Note:</strong> Please save your reference number <strong><?php echo $referenceNumber; ?></strong> for future correspondence.
                </p>
            </div>

            <!-- Back Button -->
            <a href="index.html" class="back-button">Submit Another Application</a>
        </div>
    </div>
</body>
</html>
