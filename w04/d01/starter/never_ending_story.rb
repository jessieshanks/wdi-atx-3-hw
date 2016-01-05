
def print_divider
  print"\n----------------------------------------------------------\n"
end

def header
# prints story header
  print_divider
  print "\nLET ME TELL YOU A STORY...\n"
  print_divider
end

def continue_story?
# asks if story should continue
  print "\n"
  begin
    print "     Should we continue? (y/n): "
    answer=gets.chomp.downcase
  end until (answer=='y' || answer=='n')
  return answer=='y'
end

def end_story
# prints story ender
  print_divider
  print "\nTHE END\n\n\n"
end

def tell_story(line=0)
  story = [
    'Fry is born without a delta brainwave',
    'As a result, Fry is cryogenically frozen until 2999',
    'In the future, Fry works on a spaceship',
    'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
    'Fry encounters his grandmother, then inadvertently sires his father'
  ]
  print "\n\n#{story[line].upcase}"
  if continue_story?
    if line==(story.length-1)
      tell_story(0)
    else
      tell_story(line+1)
    end
  else
    end_story
  end
end

header
tell_story
