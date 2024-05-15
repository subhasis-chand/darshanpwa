import { CardContent, Typography } from "@mui/material";
import React from "react";

const ExpandMoreContent = ({ templeName }) => {
  if (templeName === 'siddhivinayak') {
    return (
      <CardContent>
        <Typography paragraph>
          The Siddhivinayak Temple, located in Mumbai, Maharashtra, India, is one of the most renowned and revered Hindu temples dedicated to Lord Ganesha, the remover of obstacles and the god of beginnings. This iconic temple holds immense significance for devotees from across the country and around the world, drawing thousands of visitors each day. Its name, "Siddhivinayak," translates to "one who grants wishes and fulfills desires," reflecting the belief among devotees in the deity's power to bestow blessings and bring prosperity.
        </Typography>
        <Typography paragraph>
          The history of the Siddhivinayak Temple dates back to the 18th century in Mumbai, India. The temple's origin is attributed to a wealthy merchant named Laxman Vithu Patil, who built the temple complex with the help of his wife, Deubai Patil, in 1801. The couple, known for their deep devotion to Lord Ganesha, constructed the temple as a place of worship for the local community.
        </Typography>
        <Typography paragraph>
          Legend has it that Laxman Vithu Patil received divine guidance in a dream, instructing him to unearth an idol of Lord Ganesha buried in the area. Following this vision, a sculptor named Ramji Patil carved the idol from a single black stone, and it was consecrated in the newly built temple. This idol, known as "Siddhivinayak," became the presiding deity of the temple and garnered widespread reverence among devotees.
        </Typography>
        <Typography paragraph>
          Over the years, the Siddhivinayak Temple grew in popularity, attracting devotees from far and wide who sought the blessings of Lord Ganesha for success, prosperity, and the removal of obstacles. As Mumbai transformed into a bustling metropolis, the temple remained a spiritual oasis amidst the urban landscape, preserving its sanctity and cultural heritage.
        </Typography>
      </CardContent>
    );
  } else if (templeName === 'somnath') {
    return (
      <CardContent>
        <Typography paragraph>
          The Somnath Temple, situated in the state of Gujarat, India, holds a revered place in Hindu mythology and history. Dedicated to Lord Shiva, the temple is believed to be one of the twelve jyotirlingas, which are considered to be the most sacred abodes of Lord Shiva. Its location by the Arabian Sea adds to its scenic beauty and spiritual significance, drawing pilgrims and tourists alike from all corners of the country and beyond.
        </Typography>
        <Typography paragraph>
          The history of the Somnath Temple is steeped in legend and tradition, with references dating back to ancient times. According to Hindu mythology, the original temple was built by the Moon God, Soma, after he was cured of a curse by Lord Shiva. Over the centuries, the temple underwent several reconstructions and renovations due to various invasions and natural calamities. It stood as a testament to the resilience and enduring faith of devotees who rebuilt it time and again.
        </Typography>
        <Typography paragraph>
          One of the most significant events in the history of the Somnath Temple occurred during the medieval period when it was repeatedly attacked and plundered by foreign invaders. The temple's destruction and subsequent reconstructions symbolize the enduring spirit of Hinduism and the resilience of its followers. Today, the Somnath Temple stands as a symbol of national pride and religious unity, attracting devotees and visitors who come to pay homage to Lord Shiva and to witness the timeless grandeur of this ancient architectural marvel.
        </Typography>
      </CardContent>
    );
  } else if (templeName === 'shirdisai') {
    return (
      <CardContent>
        <Typography paragraph>
          Shirdi Sai Baba, revered as one of the most beloved and influential spiritual figures in India, lived during the late 19th and early 20th centuries in the small village of Shirdi, located in the western Indian state of Maharashtra. Although the details of his early life remain shrouded in mystery, Sai Baba is believed to have arrived in Shirdi as a young man and spent the majority of his life there, offering teachings that transcended religious boundaries and emphasizing the importance of love, compassion, and selfless service.
        </Typography>
        <Typography paragraph>
          Sai Baba is revered by followers of various faiths, including Hindus and Muslims, who view him as a saint, a divine incarnation, or even a manifestation of God. He was known for his simple and ascetic lifestyle, often dressed in a white robe and a head covering. Despite his humble appearance, Sai Baba's teachings and miracles attracted devotees from far and wide, who sought his blessings and guidance in matters spiritual and mundane.
        </Typography>
        <Typography paragraph>
          The Shirdi Sai Baba Temple, built after his passing, stands as a sacred pilgrimage site and a center of devotion for millions of devotees worldwide. The temple complex includes the Samadhi Mandir, which houses the tomb of Sai Baba, as well as various shrines, prayer halls, and accommodation facilities for pilgrims. Every day, thousands of devotees visit the temple to offer prayers, seek blessings, and experience the divine presence of Sai Baba, whose teachings continue to inspire countless individuals on their spiritual journey.
        </Typography>
      </CardContent>
    );

  }
  else {
    return (
      <CardContent>
        No information
      </CardContent>
    );
  }
}

export default ExpandMoreContent;