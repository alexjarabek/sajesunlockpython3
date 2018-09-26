import paypalrestsdk
import logging

paypalrestsdk.configure({
  "mode": "sandbox", # sandbox or live
  "client_id": "Aa2fNy7ARCPcY43fAjab4ZP0oMEwZyIsMV6o3KAZyDYgioR-VdLSN9s004MhNVHgvxzQiiZAi4TjUWPu",
  "client_secret": "EEkJm1LvupLQZMNwAXZ8kLQeJN2RGARE23VsjsWBP31Ug9pdph9qFbV8xmlcBhZVBfBqhnePIoJTdkMv" })


payment = paypalrestsdk.Payment.find("PAY-8HD93537FL826092KLOVPADA")

if payment.execute({"payer_id": "3ADMZMBNAHXZ6"}):
  print("Payment execute successfully")
else:
  print(payment.error) # Error Hash

# Fetch Payment
payment = paypalrestsdk.Payment.find("PAY-8HD93537FL826092KLOVPADA")

# Get List of Payments
payment_history = paypalrestsdk.Payment.all({"count": 10})
payment_history.payments
print(payment_history)
