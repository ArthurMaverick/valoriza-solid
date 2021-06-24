CREATE TABLE compliments(
    id UUID PRIMARY KEY NOT NULL,
    user_sender UUID NOT NULL,
    user_receiver UUID NOT NULL,
    tag_id UUID NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    CONSTRAINT FKuserSenderCompliments FOREIGN KEY (user_sender) REFERENCES users(id) ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT FKuserReceiveCompliments FOREIGN KEY (user_receiver) REFERENCES users(id) ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT FKtagsIdCompliments FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE SET NULL ON UPDATE SET NULL);

