<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        
        // Payload is sent to php://input as a text
        $json = file_get_contents('php://input');
        //parse the Payload from text format to Object
        $params = json_decode($json);

        // Validate input
        if (empty($params->email) || empty($params->name) || empty($params->message)) {
            echo json_encode(["status" => "error", "message" => "All fields are required."]);
            exit;
        }

        $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars($params->name);
        $message = htmlspecialchars($params->message);
        
        // Validate email format
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["status" => "error", "message" => "Invalid email format."]);
            exit;
        }

        // Send the email
        $recipient = 'denis.welsch@gmx.de';  
        $subject = "Contact From <$email>";
        $body = "From: " . $name . "<br>" . nl2br($message);  // nl2br() converts newlines to <br> tags
        
        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        // Additional headers
        $headers[] = "From: kontakt@denis-welsch.de";
        
        // Sending the email
        if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
            echo json_encode(["status" => "success", "message" => "Your message has been sent."]);
        } else {
            echo json_encode(["status" => "error", "message" => "There was an error sending the message."]);
        }
        break;

    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

