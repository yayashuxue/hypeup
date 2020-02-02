import paralleldots
paralleldots.set_api_key("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
# for single sentence
text="you f**king a$$hole"
response=paralleldots.abuse(text)
print(response)



# for multiple sentence as array
text=["you f**king a$$hole","fuck this shit"]
response=paralleldots.batch_abuse(text)
print(response)


