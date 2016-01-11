def maskify (cc)
    masker = cc
    for i in 0..(masker.length-5)
        masker[i]="#"
    end
    masker
end
