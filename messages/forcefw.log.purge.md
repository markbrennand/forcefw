# summary

Removes all Apex Log (debug) records from an org.

# description

All Apex Log records will be purged in the chosen org.

# examples

- Purge all Apex Log records:

  <%= config.bin %> <%= command.id %>

# flags.verbose.summary

Setting this flag will produce output recording command's progress.

# flags.limit.summary

Sets the number of Apex Log records to be purged. If unset, all results will be purged.
