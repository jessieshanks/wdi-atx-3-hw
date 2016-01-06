class Word

  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end

  def is_vowel? (letter)
    #checks if letter is a vowel
    vowels=["a","e","i","o","u","y"]
    v_found=false
    vowels.each do |vowel|
        v_found=(letter==vowel)
        break if v_found
    end
    return v_found
  end

  def pig_string1
    #returns 1st part of word in pig latin
    original_word[pig_string2.length...original_word.length]
  end

  def pig_string2
    #returns 2nd part of word in pig latin
    ps2=""
    if is_vowel?(original_word[0])
      if original_word[0]=="y"
        ps2="y"
      end
    else
      original_word.each_char do |letter|
        if !(is_vowel?(letter))
          ps2+=letter
        elsif ((ps2[ps2.length-1]=="q") && (letter=="u"))
          ps2+=letter
          break
        else
          break
        end
      end
    end
    return ps2
  end

  def piglatinize
    #returns word converted to pig latin
    if pig_string2.length==0
      return pig_string1+"way"
    else
      return pig_string1+pig_string2+"ay"
    end
  end

end

