require_relative 'word'

begin
  print "\n\n\nGive me a word. I will transform it into glorious Pig Latin.\n(<RETURN> key to quit)    >>"
  input=gets.chomp
  if input.length>0
    new_word=Word.new(input)
    print "\n"+new_word.piglatinize.upcase
  end
end until input.length==0

