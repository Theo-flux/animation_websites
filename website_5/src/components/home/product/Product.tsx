import { useState } from 'react';
import { Div, ButtonIcon, StyledCartIcon } from '../../../shared';
import {
  ProductContainer,
  ProductWrapper,
  Top,
  Bottom,
  ProductFigure,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductIngredient,
  ProductInstructions,
  ProductQty,
  Title,
  Text,
  Row,
  StyledAddIcon,
  StyledSubtractIcon,
  InstructionDrawer,
  InstructionText,
  QtyRow,
  Number,
  BottomStyledHeading,
  ContentCard,
  ProductContentCard,
  ContentImage,
  ContentDesc,
  ContentName,
  BottomRow
} from './product.css';
import ProductEclipse from '../../../assets/images/eclipse.png';
import ContentOne from '../../../assets/images/content_1.png';
import ContentTwo from '../../../assets/images/content_2.png';
import ContentThree from '../../../assets/images/content_3.png';

const productContent = [
  {
    id: 'content',
    image: ContentOne,
    desc: 'Sweet smelling',
    name: 'Tumeric',
  },
  {
    id: 'content',
    image: ContentTwo,
    desc: 'Sweet smelling',
    name: 'Ginger',
  },
  {
    id: 'content',
    image: ContentThree,
    desc: 'Sweet smelling',
    name: 'Ashwagandha',
  },
];

export default function Product() {
  const [isInstructionOpened, setIsinstructionOpened] = useState(false);
  const [qty, setQty] = useState(1);

  const handleDecrease = () => {
    if (qty > 0) {
      return setQty(prev => (prev -= 1));
    } else if (qty == 0) {
      return setQty(0);
    }
  };

  const handleIncrease = () => {
    setQty(prev => (prev += 1));
  };

  return (
    <ProductContainer>
      <Div>
        <ProductWrapper>
          <Top>
            <ProductFigure>
              <ProductImage src={ProductEclipse} alt="product image" />
            </ProductFigure>

            <ProductInfo>
              <ProductName>Beauty Secret</ProductName>
              <ProductPrice>N6,000</ProductPrice>
              <ProductDescription>
                Our herbal supplement is an all-natural solution to support your
                overall health and well-being.
              </ProductDescription>

              <ProductIngredient>
                <Title>Ingredient</Title>

                <Text>
                  It is made from a blend of carefully selected botanical
                  extracts, ech chosen for their unique promoting properties.
                  Ours proprietary blend includes herbs such as turmeric and
                  ginger, which are known for their ability to reduce
                  inflammation, boost immunity and support a healthy stress
                  response.
                </Text>
              </ProductIngredient>

              <ProductInstructions>
                <Row
                  onClick={() => setIsinstructionOpened(!isInstructionOpened)}
                >
                  <Title>User Instructions</Title>
                  {isInstructionOpened ? (
                    <StyledSubtractIcon />
                  ) : (
                    <StyledAddIcon />
                  )}
                </Row>

                {isInstructionOpened && (
                  <InstructionDrawer>
                    <InstructionText isOpen={isInstructionOpened}>
                      It is made from a blend of carefully selected botanical
                      extracts, ech chosen for their unique promoting
                      properties. Ours proprietary blend includes herbs such as
                      turmeric and ginger, which are known for their ability to
                      reduce inflammation, boost immunity and support a healthy
                      stress response.
                    </InstructionText>
                  </InstructionDrawer>
                )}
              </ProductInstructions>
              <ProductQty>
                <Title>QTY</Title>

                <QtyRow>
                  <StyledSubtractIcon onClick={handleDecrease} />
                  <Number>{qty}</Number>
                  <StyledAddIcon onClick={handleIncrease} />
                </QtyRow>
                <ButtonIcon text="Purchase" Icon={<StyledCartIcon />} />
              </ProductQty>
            </ProductInfo>
          </Top>

          <Bottom>
            <BottomRow>
              <BottomStyledHeading>What's Inside?</BottomStyledHeading>
              <Title>Vitality & Balance</Title>
            </BottomRow>
            <ContentCard>
              {productContent.map((content, index) => {
                const { image, desc, name } = content;
                return (
                  <ProductContentCard key={index}>
                    <ContentImage src={image} alt={'content image'} />
                    <ContentDesc>{desc}</ContentDesc>
                    <ContentName>{name}</ContentName>
                  </ProductContentCard>
                );
              })}
            </ContentCard>
          </Bottom>
        </ProductWrapper>
      </Div>
    </ProductContainer>
  );
}
