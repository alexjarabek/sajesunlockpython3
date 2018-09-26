import paypalrestsdk
import logging

paypalrestsdk.configure({
  "mode": "sandbox", # sandbox or live
  "client_id": "Aa2fNy7ARCPcY43fAjab4ZP0oMEwZyIsMV6o3KAZyDYgioR-VdLSN9s004MhNVHgvxzQiiZAi4TjUWPu",
  "client_secret": "EEkJm1LvupLQZMNwAXZ8kLQeJN2RGARE23VsjsWBP31Ug9pdph9qFbV8xmlcBhZVBfBqhnePIoJTdkMv" })

payment = paypalrestsdk.Payment({
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"},
    "redirect_urls": {
        "return_url": "http://localhost:8000/payment/execute",
        "cancel_url": "http://localhost:8000/"},
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "iphone",
                "sku": "unlock",
                "price": "5.00",
                "currency": "USD",
                "quantity": 1}]},
        "amount": {
            "total": "5.00",
            "currency": "USD"},
        "description": "pay your phone will be unlock in 2 day."}]})

if payment.create():
  print("Payment created successfully")
else:
  print(payment.error)


for link in payment.links:
    if link.rel == "approval_url":
        # Convert to str to avoid Google App Engine Unicode issue
        # https://github.com/paypal/rest-api-sdk-python/pull/58
        approval_url = str(link.href)
        print("Redirect for approval: %s" % (approval_url))
