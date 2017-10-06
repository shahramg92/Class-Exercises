import datetime
import os

import peewee
from playhouse.db_url import connect
DB = connect(
  os.environ.get(
    'DATABASE_URL',
    'postgres://postgres:postgres@localhost:5432/mydb'
  )
)
class BaseModel (peewee.Model):
  class Meta:
    database = DB
