import React from "react";

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React component.
   */
  as?: C;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {},
> = ExtendableProps<PropsOf<C>, Props>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

// export type Tag = {
//   id           String   @id @default(uuid())
//   name         String
//   color        String
//   createdAt    DateTime @default(now())
//   updatedAt    DateTime @updatedAt
//   subAccountId String

//   SubAccount SubAccount @relation(fields: [subAccountId], references: [id], onDelete: Cascade)
//   Ticket     Ticket[]
// }

// export type Pipeline = {
//   id           String     @id @default(uuid())
//   name         String
//   createdAt    DateTime   @default(now())
//   updatedAt    DateTime   @updatedAt
//   Lane         Lane[]
//   SubAccount   SubAccount @relation(fields: [subAccountId], references: [id], onDelete: Cascade)
//   subAccountId String
// }

// export type Lane = {
//   id         String   @id @default(uuid())
//   name       String
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
//   Pipeline   Pipeline @relation(fields: [pipelineId], references: [id], onDelete: Cascade)
//   pipelineId String
//   Tickets    Ticket[]
//   order      Int      @default(0)
// }

// export type Ticket = {
//   id          String   @id @default(uuid())
//   name        String
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt
//   laneId      String
//   order       Int      @default(0)
//   Lane        Lane     @relation(fields: [laneId], references: [id], onDelete: Cascade)
//   value       Decimal?
//   description String?
//   Tags        Tag[]
//   customerId String?
//   Customer   Contact? @relation(fields: [customerId], references: [id], onDelete: SetNull)
//   assignedUserId String?
//   Assigned       User?   @relation(fields: [assignedUserId], references: [id], onDelete: SetNull)
// }

//   export type Permissions = {
//     id           String     @id @default(uuid())
//     email        String
//     User         User       @relation(fields: [email], references: [email], onDelete: Cascade)
//     subAccountId String
//     SubAccount   SubAccount @relation(fields: [subAccountId], references: [id], onDelete: Cascade)
//     access       Boolean
//   }

// export type User = {
//     id           String         @id @default(uuid())
//     name         String
//     avatarUrl    String         @db.Text
//     email        String         @unique
//     createdAt    DateTime       @default(now())
//     updatedAt    DateTime       @updatedAt
//     role         Role           @default(SUBACCOUNT_USER)
//     agencyId     String?
//     Agency       Agency?        @relation(fields: [agencyId], references: [id], onDelete: Cascade)
//     Permissions  Permissions[]
//     Ticket       Ticket[]
//     Notification Notification[]
  
//     @@index([agencyId])
// }

// export type ClassName = {
//   id:         String
//   name:       String
//   color:      String
//   createdAt:  Date
//   updatedAt:  Date
//   funnelId:   String
//   customData: String
//   Funnel:    Funnel
// }

// export type Agency = {
//   id:               String                @id @default(uuid())
//   connectAccountId: String?               @default("")
//   customerId:       String                @default("")
//   name:             String
//   agencyLogo:       String                @db.Text
//   companyEmail:     String                @db.Text
//   companyPhone:     String
//   whiteLabel:       Boolean               @default(true)
//   address:          String
//   city:             String
//   zipCode:          String
//   state:            String
//   country:          String
//   goal:             Int                   @default(5)
//   users:            User[]
//   createdAt:        DateTime              @default(now())
//   updatedAt:        DateTime              @updatedAt
//   SubAccount:       SubAccount[]
//   SidebarOption:    AgencySidebarOption[]
//   Invitation:       Invitation[]
//   Notification:     Notification[]
//   Subscription:     Subscription?
//   AddOns:           AddOns[]
// }

// export type SubAccount = {
//   id:               String
//   connectAccountId: String
//   name:             String
//   subAccountLogo:   String
//   createdAt:        Date
//   updatedAt:        Date
//   companyEmail:     String
//   companyPhone:     String
//   goal:             number
//   address:          String
//   city:             String
//   zipCode:          String
//   state:            String
//   country:          String
//   agencyId:         String
//   Agency:           Agency
//   SidebarOption:    SubAccountSidebarOption[]
//   Permissions:      Permissions[]
//   Funnels:          Funnel[]
//   Media:            Media[]
//   Contact:          Contact[]
//   Trigger:          Trigger[]
//   Automation:       Automation[]
//   Pipeline:         Pipeline[]
//   Tags:             Tag[]
//   Notification:     Notification[]
// }

// export type Funnel = {
//   id: String
//   name: String
//   createdAt: Date
//   updatedAt: Date
//   description: String
//   published: Boolean
//   subDomainName: String
//   favicon:       String
//   subAccountId:  String
//   SubAccount:    SubAccount
//   FunnelPages:   FunnelPage[]
//   liveProducts:  String
//   ClassName:     String
// }
 