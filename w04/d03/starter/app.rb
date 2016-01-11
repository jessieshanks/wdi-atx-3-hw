require 'sinatra'
require 'sinatra/reloader'



$magic8_predictions=
[
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]


def question
  print "What is your question?"
  return gets.chomp
end

# Coin toss
get '/coin_toss' do
  toss_outcomes=["heads","tails"]
  @coin_result=toss_outcomes[rand(2)]
  erb :coin_toss
end

# Dice roll
get '/dice_roll' do
  @dice_result=1+rand(6)
  erb :dice_roll
end

# Magic 8 ball
get '/magic8ball/:question' do
  @magic8_result=$magic8_predictions[rand(19)]
  erb :magic8ball
end
