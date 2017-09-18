ex11_original = [1, 2, 2, 3, 4, 5, 6, 4, 7, 5, 5]
ex11_deduped = []
def dedup(list):
    for num in ex11_original:
        if not num in ex11_deduped:
            ex11_deduped.append(num)
    return ex11_deduped
print("11. De-dup:\nOriginal List:", ex11_original, "\nDe-Duped List:", dedup(ex11_original))
