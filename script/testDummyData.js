const testData = [
  {
    name: 'Wise Mind',
    description: `Wise mind is the combination of both Reasonable mind and emotional mind. 
    From it, we can consider both facets of the truth: we have a brain and a heart and both 
    need to be taken into consideration. Can you see which are examples of Wise Mind and which aren’t?`,
    questions: [
      {
        id: 1,
        text: 'Intuitive?',
        answer: 'Yes',
        response: `Often times our intuition, when we feel it, comes from a place of Wise Mind, 
        where both our emotions and logic are open and willing to experience the situation as it is.`
      },
      {
        id: 2,
        text:
          'Your instructor gives you more homework than you expected so you tell yourself that he’s an assole.',
        answer: 'No',
        response: `This is a judgement. The teacher is not literally an asshole. A wise mind way to recognize
        your frustration would be to rephrase this judgement into an observation and description:
        ‘My teacher gave me more homework than I think he should have. I’m angry because I’m worried that 
         I won’t have time to finish it.”`
      },
      {
        id: 3,
        text: ` You feel bad and in order to cope you eat 2 cookies and a glass of milk.`,
        answer: 'Yes',
        response: `Although many people would think eating cookies and milk is bad, it may just be the recipe for helping 
        someone cope with an issue in the short term. One must survive the short term without making it worse in order
        to improve the long term. `
      },
      {
        id: 4,
        text: `You and your spouse want to grab a bite to eat but aren't sure where to go. You feel like having vegetables
        but your spouse wants comfort food. In order to avoid conflict, you hold back your opinion and agree to go where
        your spouse wants.`,
        answer: 'No',
        response: `Chances are that if you are married to someone you will have disagreements from time to time. However, 
        in this situation you aren’t being fair to yourself and put your spouse ahead of your own needs. While this 
        may work on certain occasions, making it a  habit to not be true to yourself by saying what you want may erode 
        your self esteem and eventually the relationship.`
      },
      {
        id: 5,
        text: `You are busy working on a project and look at the clock. It is halfway through lunch and you didn’t even 
        realize, You go get lunch.`,
        answer: 'Yes',
        response: `Although you could have kept working and skipped the meal completely, giving yourself regular meals is an 
        important step in regulating blood sugar levels. It is also a form of taking care of your body which is also a 
        simple example of Wise Mind.`
      },
      {
        id: 6,
        text: `You feel so bad you eat an entire box of cookies.`,
        answer: 'No',
        response: `While eating cookies may actually be a good strategy for short term coping with negative emotions, 
        eating an entire box neglects the reasonable mind which says that eating an entire box of cookies will probably
        make you feel worse.`
      },
      {
        id: 7,
        text: `You get into an argument with your partner about one thing, and then start bringing up old issues 
        that are unrelated to the current situation.`,
        answer: 'No',
        response: `Even though it is understandable that you would still be upset about previous fights and issues, bringing them 
        up is not focusing on the present issue. Not only will it delay a resolution,a lot of unnecessary venom can be spread that way.`
      }
    ]
  },
  {
    name: 'Observation',
    description: `One of the ways to get into wise mind is to observe. Notice without trying to change anything. 
         Allow while noticing the external and internal. Can you tell which are examples of this skill?`,
    questions: [
      {
        id: 1,
        text:
          'You notice negative feelings and tell yourself why they are not true.',
        answer: 'Yes',
        response: `Although this method may sometimes work for relieving stress, this is not observing. To see something as it really is, 
             you must be willing to see it as it is, even if it means seeing something you don’t like.
             `
      },
      {
        id: 2,
        text: `You allow yourself to feel your anger after receiving a rude comment without trying to 
             increase or decrease it.`,
        answer: 'Yes',
        response: `Often times observing our emotions also helps to decrease them.`
      },
      {
        id: 3,
        text: `You notice the driver in front of you is driving like an asshole.`,
        answer: 'No',
        response: `This is a judgement and is not what observing is. Nevertheless, if you notice you had that 
            judgement and that you judged this person as an asshole, that would be a correct use of observe.`
      },
      {
        id: 4,
        text: `Your spouse is angry with you and raises their voice. Instead of reacting to his/her/their  emotion, 
            you observe his/ her/their emotions with trying to defend yourself.`,
        answer: 'Yes',
        response: `people get upset for various reasons. It is very skillful thing to notice them instead of just reacting 
            to your own thoughts and emotions about them.`
      },
      {
        id: 5,
        text: `You notice the blue color of the sky.`,
        answer: `Yes`,
        response: `As long as you just notice and do anything but allow, that is correctly practicing the observe skill.`
      },
      {
        id: 6,
        text: `You observe that your spouse is being insensitive.`,
        answer: `No`,
        response: `This is actually a judgement or interpolation of what really happened. An observation would be something 
            like observing that you don’t feel understood or observing a sense of insecurity.`
      },
      {
        id: 7,
        text: `You notice the way the birds are chirping during your morning cup of coffee.`,
        answer: `Yes`,
        response: `we figure out what is true in the world and within ourselves by observing, 
            using our 5 senses and internal senses.`
      },
      {
        id: 8,
        text: `You observe your anger rising until you lash out. `,
        answer: `No`,
        response: `Chances are that if you are observing your anger and you last out,either you 
            should not be practicing observe at that time or you were actually just getting caught up in the story 
            you were telling yourself while being angry, getting caught up in your thoughts while being overwhelmed will 
            usually make a person see their thoughts as actual events when they are just interpretations and only thoughts.`
      },
      {
        id: 9,
        text: `You notice the way your body feels in reaction to thinking about the smell of roses.`,
        answer: 'Yes',
        response: `Noticing the way your body feels is a great way to practice this skill.`
      },
      {
        id: 10,
        text: `Noticing your urge to punch someone and the body sensation that comes with that urge.`,
        answer: 'Yes',
        response: `Urges are one of the ways we internally communicate w/ourselves. Being aware of this is 
            important when it comes to being in wise mind. `
      }
    ]
  },
  {
    name: 'Describe',
    description: `Describe is the next skill after observe to get to wise mind. To 
        describe( label something as it is)  you must observe it first. Can you tell which are examples of correctly 
        practicing describe?
        `,
    questions: [
      {
        id: 1,
        text: `I felt angry when you said…`,
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 2,
        text: `The sky is bright.`,
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 3,
        text: `He looked ugly.`,
        answer: 'No',
        response: `This is an incorrect use becuase 'ugly' is an interpretation of the person’s physical appearance. `
      },
      {
        id: 4,
        text: 'You look cold.',
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 5,
        text: `I feel tension in my jaw.`,
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 6,
        text: `I suck.`,
        answer: 'No',
        response: `This is an incorrect use and is actually a self judgement.`
      },
      {
        id: 7,
        text: 'I felt a chill run down my spine .',
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 8,
        text: `I feel insecure.`,
        answer: 'Yes',
        response: `This is a correct use.`
      }
    ]
  },
  {
    name: 'Participate',
    description: `Entering fully into present experiences is the third way we can actively get into wise mind, 
        after observe and describe.Which of the following are examples of participate?`,
    questions: [
      {
        id: 1,
        text: `You go to a party and feel uncomfortable so you avoid eye contact with others.`,
        answer: `No`,
        response: `This is incorrect and is the opposite of participation.`
      },
      {
        id: 2,
        text: `You really don’t want to go to class but you decide that since you paid for it, you may as well 
            try to get as much as you can out of it.`,
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 3,
        text: `You really love weightlifting but lately you have been daydreaming while doing your exercises.`,
        answer: 'No',
        response: 'This is an incorrect use of this skill.'
      },
      {
        id: 4,
        text: `You want to finish a project but it is getting late. You push through, willing yourself to 
            work even though your spouse is expecting you to be home soon. `,
        answer: 'No',
        response: `Participation is not about willing yourself. It is about going with the flow and being totally 
            connected with yourself and the current situation you are in.`
      },
      {
        id: 5,
        text: `A friend invites you out. Even though you aren’t busy, you tell your friend that you are busy 
            and maybe next time.`,
        answer: 'No',
        response: 'This is an incorrect use of this skill.'
      },
      {
        id: 6,
        text: `Your dbt instructor encourages you to participate at the gym. So you join a cycling class and it becomes your 
            new favorite hobby and you able to erase your worries as you exercise for an hour. `,
        answer: 'Yes',
        response: `This is a correct use.`
      }
    ]
  },
  {
    name: 'Non-Judgemental',
    description: `Being non-judgemental can be difficult but sticking to the facts can really help you and 
        your relationships. Which are examples of this skill?`,
    questions: [
      {
        id: 1,
        text: `I’ve had a bad day.`,
        answer: 'No',
        response: `Technically, this is a judgement about your day. A less judgemental way of saying this may be 
            ‘I’ve had a difficult day.’ It is important to note that while practicing this skill, we take note of all 
            judgements. But in practical terms, we’re going to be judgemental every day for the rest of our lives no 
            matter what we do. So, in an effort to be practical, it is only useful to be non-judgemental in situations 
            where being judgemental gets in the way of our happiness.`
      },
      {
        id: 2,
        text: `I hate the rain.`,
        answer: 'No',
        response: `Hate is a preference or emotion. So if you hate it, you hate it.`
      },
      {
        id: 3,
        text: `You are always late.`,
        answer: 'No',
        response: `this is probably an exaggeration because no one is actually *always* late. Watch out for words like always and never. 
            If you use them, you’re probably judging.`
      },
      {
        id: 4,
        text: `I didn’t do as well as i wish i did`,
        answer: 'Yes',
        response: `This is a correct use.`
      },
      {
        id: 5,
        text: `This car is the best.`,
        answer: 'No',
        response: `Even positive judgements are judgements . Maybe  more non-judgemental statement like 
            ‘This is my favorite car’ would work better here since it is a matter of preference.`
      },
      {
        id: 6,
        text: `You never do anything romantic.`,
        answer: 'No',
        response: `Not only is this a loaded statement but it is neither true, nor is it non-judgemental.  
            A more appropriate statement would be ‘I noticed we haven’t done anything romantic lately...'`
      },
      {
        id: 7,
        text: `You were late three times this week.`,
        answer: 'No',
        response: `Saying something like this is non-judgemental because it is specific and sticks to the facts, 
            no judgement involved.`
      },
      {
        id: 8,
        text: `Pizza is gross.`,
        answer: 'No',
        response: `Pizza isn’t gross. It is just pizza, though some may have a preference for it or not.`
      }
    ]
  },
  {
    name: `One Mindfully`,
    description: `One mindfully is similar to participate but it is actively doing one thing at a time.  
        Which situations use one-mindfully?`,
    questions: [
      {
        id: 1,
        text: `Reading a book on the bus.`,
        answer: 'No',
        response: `reading while we’re going to have to be in a physically passive state can be a great use of our time. 
            We can use this time to learn new things and improve our lives. However,when practicing one mindfully, focus on 
            sitting and only being there on the bus. `
      },
      {
        id: 2,
        text: `As you focus on what your friend is saying, your mind wanders and you begin planning your 
            response before they finish their sentence.`,
        answer: 'No',
        response: `This is a situation where distraction prevents you from practicing one mindfully. Simply bring your attention 
            back to listening. `
      },
      {
        id: 3,
        text: `Daydreaming while driving.`,
        answer: 'No',
        response: `Though it is our natural instinct to go on autopilot when driving,focus only on driving. `
      },
      {
        id: 4,
        text: `Multitasking`,
        answer: 'No',
        response: `multitasking is the exact opposite of one mindfully. Though we may be more productive by multitasking, 
            doing so can distract us from the present moment.`
      },
      {
        id: 5,
        text: `You lay down to go to bed but after half an hour, you’re still restless. You focus on just your breathing.`,
        answer: 'Yes',
        response: `Although initially you are trying to sleep, you then focus on just your breath. 
            Doing so can actually help you fall asleep naturally if your mind is fighting it.`
      },
      {
        id: 6,
        text: `You sit down for lunch and watch your favorite show while eating a bowl of soup.`,
        answer: 'No',
        response: `Taking care of yourself is quite important: eating and relaxing. However, this is not a correct use.`
      }
    ]
  }
]

module.exports = testData
