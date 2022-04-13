import styles from "styles/layout.module.scss";
import cn from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { TestimonyService } from "services/TestimonyService";
import styled from "styled-components";
import { formatDateLong } from "utils/format";

const MessageArea = styled.div`
  padding: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);

  .name {
    margin-top: 20px;
    font-size: 1.1em;
    color: #444;
  }
  .date {
    font-size: 0.8em;
    color: #666;
  }
`;

export const TestimonyArea: React.FC = () => {
  const [testimonyList, setTestimonyList] = useState<any[]>([]);

  const getTestimonyList = async () =>
    setTestimonyList(await TestimonyService.getTestimonyList());

  useEffect(() => {
    getTestimonyList();
  }, []);

  return (
    <div
      id="depoimentos"
      className={cn("section", styles.section, styles.sectionTestimony)}
    >
      <div className={styles.contentArea} style={{ maxWidth: "100%" }}>
        <h2 className="fancy-title">Depoimentos</h2>

        <div>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            interval={10000}
            dynamicHeight={true}
          >
            {testimonyList.map((testimony) => (
              <MessageArea>
                {testimony.message}
                <div className="name">{testimony.name}</div>
                <div className="date">
                  {formatDateLong(new Date(testimony.sentAt))}
                </div>
              </MessageArea>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
